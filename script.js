/* Northline Yoga — script.js
   Two jobs only: the mobile nav toggle and the FAQ accordion. */

(function () {
  "use strict";

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    var closeNav = function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close when a link is tapped.
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        closeNav();
      }
    });

    // Escape closes and returns focus to the button.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        closeNav();
        toggle.focus();
      }
    });

    // If the viewport grows past the desktop breakpoint, drop the open state
    // so the menu is not stuck open when it shrinks again.
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 820) {
        closeNav();
      }
    });
  }

  /* ---------- FAQ accordion ---------- */
  var questions = document.querySelectorAll(".faq-q");

  Array.prototype.forEach.call(questions, function (btn) {
    btn.addEventListener("click", function () {
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      if (!panel) { return; }
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      panel.classList.toggle("is-open", !open);
    });
  });
})();
