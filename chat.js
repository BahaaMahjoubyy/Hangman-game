$(document).ready(function () {
    let messages = []
    ///local storage
    function updateLocalStorage() {
        localStorage.setItem("chatMessages", JSON.stringify(messages));
      }

      // Function to display a message in the chat window
function displayMessage(message, isUser = false) {
    let msg_time = getCurrentTime();
  
    // Create the message container
    let msgContainerClass = isUser ? "msg_cotainer_send" : "msg_cotainer";
    let msgContainer = $("<div class='" + msgContainerClass + "'></div>");
  
    // Create the message text and time elements
    let msgText = $("<div class='msg_cotainer'>" + message + "</div>");
    let msgTime = $("<span class='msg_time'>" + msg_time + "</span>");
  
    // Append the message text and time to the container
    msgContainer.append(msgText);
    msgContainer.append(msgTime);
  
    // Append the message container to the chat body
    $(".msg_card_body").append(msgContainer);
  
    // Scroll to the bottom of the chat body to show the latest message
    $(".msg_card_body").scrollTop($(".msg_card_body")[0].scrollHeight);
  
    // Add the message to the messages array
    messages.push({
      content: message,
      timestamp: msg_time,
      isUser: isUser,
    });
  
    // Update local storage with the new messages
    updateLocalStorage();
  }
  // Function to send a message
  function sendMessage() {
	let messageInput = $(".type_msg");
	let messageText = messageInput.val();
  
	if (messageText.trim() !== "") {
	  let newMessage = {
		content: messageText, // Change 'text' to 'content'
		isUser: true,
		timestamp: getCurrentTime(), // Change 'time' to 'timestamp'
	  };
  
	  messages.push(newMessage);
	  updateLocalStorage();
	  displayMessage(messageText, true); // Pass the correct message content
	  messageInput.val(""); // Clear the message input
	}
  }
  
// Event listener for sending messages
$(".send_btn").click(function () {
	let message = $(".type_msg").val();
	sendMessage();
});

// Event listener for pressing Enter key to send a message
$(".type_msg").keypress(function (e) {
  if (e.which === 13) {
	sendMessage();
  }
});
// Function to search for friends
function searchFriends() {
	let searchInput = $(".search");
	let searchTerm = searchInput.val().toLowerCase();

	$(".contacts li").each(function () {
	  let userName = $(this).find(".user_info span").text().toLowerCase();

	  // Show or hide the friend based on the search term
	  if (userName.includes(searchTerm)) {
		$(this).show();
	  } else {
		$(this).hide();
	  }
	});
  }

  // Event listener for searching friends
  $(".search_btn").click(function () {
	searchFriends();
  });

  // Event listener for searching friends on input change
  $(".search").on("input", function () {
	searchFriends();
  });


  // Function to get current time in HH:mm AM/PM format
  function getCurrentTime() {
	let now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let ampm = hours >= 12 ? "PM" : "AM";
	hours = hours % 12 || 12;
	minutes = minutes < 10 ? "0" + minutes : minutes;
	return hours + ":" + minutes + " " + ampm;
  }
});
