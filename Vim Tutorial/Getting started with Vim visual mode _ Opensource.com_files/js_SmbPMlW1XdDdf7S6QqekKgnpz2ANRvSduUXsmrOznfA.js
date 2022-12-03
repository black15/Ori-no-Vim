"use strict";

(function ($, Drupal) {
  "use strict";

  function moveMastodonForm() {
    $("#mastodon-form").appendTo("#mastodon-container");
  }

  function isUrlValid(url) {
    var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g),
        isSecur = url.substr(0, 8) == 'https://';

    if (res !== null && isSecur) {
      return res;
    }
  }

  function mastondonSubmit() {
    var submitEl = $('#mastodon-form'),
        mastodonUrlEl = $("#edit-mastodon-url"),
        errorMessage = '<div class="form-item--error-message"><strong>Please use a valid secure URL (https://)</strong></div>',
        urlQuery = $('#edit-submit').data('query');
    submitEl.submit(function (e) {
      e.preventDefault();
      var url = mastodonUrlEl.val(),
          checkUrl = isUrlValid(url);

      if (checkUrl) {
        mastodonUrlEl.val("").removeClass('error');
        $('.form-item--error-message').remove();
        window.open(url + urlQuery, "_blank", "scrollbars=yes,resizable=yes,width=950,height=650");
        document.querySelector("pfe-modal").close();
      } else {
        if (!mastodonUrlEl.hasClass('error')) {
          $(errorMessage).insertAfter(mastodonUrlEl);
          mastodonUrlEl.addClass('error');
        }
      }
    });
  }

  $(function () {
    $('.twitter-icon').click(function (e) {
      e.preventDefault();
      var href = $(this).attr('href');
      window.open(href, "Twitter", "height=290,width=550,resizable=1");
    });
    $('.facebook-icon').click(function (e) {
      e.preventDefault();
      var href = $(this).attr('href');
      window.open(href, "Facebook", "height=275,width=550,resizable=1");
    });
    $('.linkedin-icon').click(function (e) {
      e.preventDefault();
      var href = $(this).attr('href');
      window.open(href, "LinkedIn", "height=600,width=575,resizable=1");
    });
    $('.reddit-icon').click(function (e) {
      e.preventDefault();
      var href = $(this).attr('href');
      window.open(href, "Reddit", "height=500,width=575,resizable=1");
    });
    $('.whatsapp-icon').click(function (e) {
      e.preventDefault();
      var href = $(this).attr('href');
      window.open(href, "WhatsApp", "height=500,width=575,resizable=1");
    });
    setTimeout(moveMastodonForm, 500);
    mastondonSubmit();
  });
})(jQuery, Drupal);

;
