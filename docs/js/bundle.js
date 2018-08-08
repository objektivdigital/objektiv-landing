"use strict";function questionnaireStageOne(t,e){var n={strings:["> What is the "+e+"'s purpose?"],typeSpeed:40,showCursor:!1};switch(e){case"website":var o='\n\t\t            <div class="row second-magic-row">\n\t\t              <div class="col-12 cta-button-container-2">\n\t\t                <button class="btn btn-md btn-dark" id="need-communication" onClick="$(this).attr(\'onClick\',\'\');questionnaireStageTwo($(\'#need-communication\'), \'website\');" type="button">To share ideas.</button>\n\t\t              </div>\n\t\t              <div class="col-12 cta-button-container-2">\n\t\t                <button class="btn btn-md btn-dark" id="need-marketing" onClick="$(this).attr(\'onClick\',\'\');questionnaireStageTwo($(\'#need-marketing\'), \'website\');" type="button">To market my business.</button>\n\t\t              </div>\n\t\t              <div class="col-12 cta-button-container-2">\n\t\t                <button class="btn btn-md btn-dark" id="need-ecommerce" onClick="$(this).attr(\'onClick\',\'\');questionnaireStageTwo($(\'#need-ecommerce\'), \'ecommerce\');" type="button">To sell products online.</button>\n\t\t              </div>\n\t\t            </div>';break;case"mobile app":var o='\n\t\t            <div class="row second-magic-row">\n\t\t              <div class="col-12 cta-button-container-2">\n\t\t                <button class="btn btn-md btn-dark" id="need-promotion" onClick="$(this).attr(\'onClick\',\'\');questionnaireStageTwo($(\'#need-promotion\'), \'promote\');" type="button">To promote something.</button>\n\t\t              </div>\n\t\t              <div class="col-12 cta-button-container-2">\n\t\t                <button class="btn btn-md btn-dark" id="need-provide-service" onClick="$(this).attr(\'onClick\',\'\');questionnaireStageTwo($(\'#need-provide-service\'), \'mobile app\');" type="button">A service for its users.</button>\n\t\t              </div>\n\t\t              <div class="col-12 cta-button-container-2">\n\t\t                <button class="btn btn-md btn-dark" id="need-tech-idea" onClick="$(this).attr(\'onClick\',\'\');questionnaireStageTwo($(\'#need-tech-idea\'), \'mobile app\');" type="button">My innovative tech idea.</button>\n\t\t              </div>\n\t\t            </div>';break;case"server setup":var o='\n\t\t            <div class="row second-magic-row">\n\t\t              <div class="col-12 cta-button-container-2">\n\t\t                <button class="btn btn-md btn-dark" id="need-single-host" onClick="$(this).attr(\'onClick\',\'\');questionnaireStageTwo($(\'#need-single-host\'), \'server\');" type="button">Host for all my clients.</button>\n\t\t              </div>\n\t\t              <div class="col-12 cta-button-container-2">\n\t\t                <button class="btn btn-md btn-dark" id="need-scaling" onClick="$(this).attr(\'onClick\',\'\');questionnaireStageTwo($(\'#need-scaling\'), \'server\');" type="button">Prepare my site for growth.</button>\n\t\t              </div>\n\t\t              <div class="col-12 cta-button-container-2">\n\t\t                <button class="btn btn-md btn-dark" id="need-cheaper" onClick="$(this).attr(\'onClick\',\'\');questionnaireStageTwo($(\'#need-cheaper\'), \'server\');" type="button">Migrate to cheaper hosting.</button>\n\t\t              </div>\n\t\t            </div>'}$("section.one").css("padding-top","96px"),$(".cta-button-container .btn").hide(),t.css("margin","0px"),t.show(),t.parent().css("border-bottom","3px solid #343a40"),t.parent().css("padding-left","0px"),t.parent().css("padding-right","0px"),t.parent().addClass("text-left"),t.parent().append('<h2 id="key-question"></h2>'),setTimeout(function(){new Typed("#key-question",n);$("#where-the-magic-happens").append(o),$(".second-magic-row").hide(),$(".second-magic-row").fadeIn()},1200)}function questionnaireStageTwo(t,e){switch(e){case"website":var n="web-design-example-two";break;case"promote":var n="mobile-development-example-one";break;case"mobile app":var n="mobile-development-example-two";break;case"ecommerce":var n="mobile-development-example-one"}if("server"==e)var o={strings:["> That's totally Objektiv's wheelhouse! I'm a command line wizard."],typeSpeed:15,showCursor:!1},a='\n\t            <div class="row third-magic-row">\n\t              <div class="col-12 cta-button-container-3">\n\t                <a class="btn btn-md btn-dark" id="marketing-no" href="mailto:ian@objektiv.digital?subject=Server Administration">Let\'s have a chat.</a>\n\t              </div>\n\t            </div>';else var o={strings:["> That's totally Objektiv's wheelhouse! Want to see a sample of work before we begin?"],typeSpeed:15,showCursor:!1},a='\n\t            <div class="row third-magic-row">\n\t              <div class="col-12 cta-button-container-3">\n\t                <a class="btn btn-md btn-dark" id="marketing-yes" href="#'+n+'">Yeah! Show me what you\'ve got.</a>\n\t              </div>\n\t              <div class="col-12 cta-button-container-3">\n\t                <a class="btn btn-md btn-dark" id="marketing-no" href="mailto:ian@objektiv.digital?subject=Request For Proposal&body=First time writing an RFP (Request For Proposal)? Check out this article:\n https://vtldesign.com/web-strategy/web-design-web-strategy/how-to-write-a-website-design-request-for-proposal/">I\'d rather have a chat.</a>\n\t              </div>\n\t            </div>';$(".cta-button-container-2 .btn").hide(),t.css("margin","0px"),t.show(),t.parent().css("border-bottom","3px solid #343a40"),t.parent().css("padding-left","0px"),t.parent().css("padding-right","0px"),t.parent().addClass("text-left"),t.parent().append('<p id="key-message"></p>'),setTimeout(function(){new Typed("#key-message",o);$("#where-the-magic-happens").append(a),$(".third-magic-row").hide(),$(".third-magic-row").fadeIn()},1200)}$(document).ready(function(){var t={strings:["What is your objective?","What is your Objektiv?"],smartBackspace:!0,typeSpeed:40,showCursor:!1};setTimeout(function(){new Typed("#objektiv-headline",t)},1500),$(document).scroll(function(){var t=$(document).scrollTop(),e=$("#to-the-top").position().top,n=$("#portfolio").position().top,o=$("#contact").position().top;t>n&&t<o?($(".nav-item .nav-link .sr-only").remove(),$("#nav-contact .nav-link").html('Contact <span class="sr-only">(current)</span>'),$(".nav-item").removeClass("active"),$("#nav-contact").addClass("active")):t>e&&t<n?($(".nav-item .nav-link .sr-only").remove(),$("#nav-portfolio .nav-link").html('Portfolio <span class="sr-only">(current)</span>'),$(".nav-item").removeClass("active"),$("#nav-portfolio").addClass("active")):t<n&&($(".nav-item .nav-link .sr-only").remove(),$("#nav-about .nav-link").html('About <span class="sr-only">(current)</span>'),$(".nav-item").removeClass("active"),$("#nav-about").addClass("active"))})});