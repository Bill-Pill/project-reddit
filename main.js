// On post button click, retrieve "Post Text" and "Name" from form inputs
postClicked = function() {
  let postInput = $("#post-text").val()
  let nameInput = $("#name-text").val()
  if (!postInput || !nameInput) {
    alert('Please fill in all fields')
    return;
  }

  let postHtml =  '<a href="#" class="comment-link" role="button">Comments</a>' + '<div class="page-header">' +
                  '<p>'+ postInput + '</p>' +
                  '<p>Posted By: <span><strong>' + nameInput + '</strong></span></p>' +
                  '<form class="comment-form hidden">' +
                  '<input id="comment-text" type="text" placeholder="Comment Text">' +
                  '<input id="comment-user" type="text" placeholder="Name">' +
                  '<button class="btn btn-primary comment-button" type="button">Add Comment</button>' +
                  '</form></div>'

  // Add our saved inputs to the page and clear form
  $("#post-container").prepend(postHtml);
  $("#post-form")[0].reset();
}

// Check for comment link click and only open comments for that post on click
checkCommentClick = function(event) {
  if ($(event.target).hasClass('comment-link')) {
    $(event.target).next(".page-header").children(".comment-form").toggleClass("hidden")
    console.log('comment toggled')
  }
}

// $("#post-container").on("click", function (e) {
//   var $clickedElement = $(e.target)
//   if ($clickedElement.hasClass('comment-link')) {
//     $clickedElement.siblings(".page-header").children(".comment-form").toggleClass("hidden")
//     console.log('comment toggled')
//   }
// })


$(".post-button").on("click", postClicked);
$("#post-container").on("click", checkCommentClick)
