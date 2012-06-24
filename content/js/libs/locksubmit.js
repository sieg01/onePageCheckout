//Lock a submit button when clicked from being clicking again and change the value of the submit to a message, while preserving the submits name and value in a hidden input.
//License: http://www.gnu.org/licenses/lgpl.txt
//Homepage: http://blog.leenix.co.uk/2009/09/jquery-plugin-locksubmit-stop-submit.html
//Version 1.03
jQuery.fn.lockSubmit=function(a){var b=jQuery.extend({submitText:null,onAddCSS:null,onClickCSS:null},a);if(b.onAddCSS){this.addClass(b.onAddCSS)}return this.live("click",function(h){var d=jQuery(this);var g=d.next(".dummy");if(g.size()==0){var g=d.clone();if(b.submitText){var f=b.submitText}else{var f=jQuery(this).val()}var c=d.attr("id");if(c!==undefined){g.attr("id",c+"dummySubmit")}g.addClass("dummy").attr("disabled",true).attr("name",d.attr("name")+"DUMMY").val(f);d.addClass("dummied").hide();d.after(g);if(b.onClickCSS){jQuery("#dummySubmit").addClass(b.onClickCSS)}}else{d.hide();g.show()}return true})};jQuery.fn.lockSubmitReset=function(){this.show();jQuery("#dummySubmit").remove()};