/**
 * A client-side project using jquery to support thanking system
 * on a thread for a free forum builder
 * https://www.forumotion.com/
 */

$(document).ready(function () {
  // Because Forumotion assign global var for user's data under _userdata obj we can use it
  // insted of traversing the DOM to find current authed user info, however i needed to assign
  // an in memory enum because they might fall back the object.
  const AUTHED_USER_ENUM = {
    USER_NAME: _userdata["username"] || "Anonymous",
    IS_LOGGED_IN: _userdata.session_logged_in,
    USER_ID: _userdata["user_id"] || undefined,
  };

  if (!AUTHED_USER_ENUM.IS_LOGGED_IN) return;

  const CURRENT_FORUM_LINK = $(`meta[property='og:site_name']`).attr("content");
  const CURRENT_TOPIC_ID = window.location.pathname;
  const API_URI = "";

  if (!CURRENT_FORUM_LINK || !CURRENT_TOPIC_ID) return;

  // Ref first post body in a thread.
  const $POSTBODY_REF = $(".post.row2");

  const $POSTBODY_THREAD_REF = $POSTBODY_REF.find(".postbody");

  // async get thanks data then append
  getThanksDataForThread().then((response) => {
    const { data } = response;

    renderThanksDataToDom(data);
  });

  // Render Thanks Button.
  $POSTBODY_THREAD_REF
    .append(
      `
      <div class="thanks_system">
          <div class="thanks_error_view"></div>
          <div class="thanks_list_view"></div>
          <div class="thanks_button"> 
              Thank <span>${getThreadAuthorUserName()}</span>
          </div>
      </div>`
    )
    .on("click", ".thanks_button", handleThanksButtonClick);

  /**
     * Example for data obj to be renderd into the dom
     * {
          status: Boolean,
          message: String,
          users_thanked: [{
              user_name: String,
              user_id: Number
          }]
       } 
    */
  function renderThanksDataToDom(data) {
    if (!data.status) {
      $POSTBODY_THREAD_REF
        .find(".thanks_error_view")
        .html(`<div class="thank_system_message">${data.message}</div>`);
      return;
    }

    const { users_thanked } = data.thanks;

    let thankedUsersList = ``;
    for (let user_thanked of users_thanked) {
      thankedUsersList += `<div class="user_name">${user_thanked.user_name}</div>`;
    }

    $POSTBODY_THREAD_REF.find(".thanks_list_view").html(thankedUsersList);
  }

  async function getThanksDataForThread() {
    const response = await fetch(
      `${API_URI}?forum_link=${CURRENT_FORUM_LINK}&topic_id=${CURRENT_TOPIC_ID}`
    );
    const data = await response.json();

    return data;
  }

  async function handleThanksButtonClick(e) {
    e.preventDefault();

    const thanksData = {
      forum_link: CURRENT_FORUM_LINK,
      topic_id: CURRENT_TOPIC_ID,
      user_id: AUTHED_USER_ENUM.USER_ID,
      user_name: AUTHED_USER_ENUM.USER_NAME,
    };

    const response = await fetch(API_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(thanksData),
    });

    const { data } = await response.json();

    renderThanksDataToDom(data);
  }

  function getThreadAuthorUserName() {
    const userTopicName = $POSTBODY_REF.find(".postprofile-name").text();

    return userTopicName;
  }
});
