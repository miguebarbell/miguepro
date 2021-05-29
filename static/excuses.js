document.addEventListener('DOMContentLoaded', load_excuse)

const excuses = Array("Are you using Internet Explorer Web Browser?",

	"That error means it was successful.",

	"It works for me.",

	"That's weird...",

	"It's never done that before.",

	"It worked yesterday.",

	"Right now I am doing the analysis, so I haven't started the work yet.",

	"Your browser must be caching the old content.",

	"It's a browser compatibility issue.",

	"It must be because of a leap year.",

	"It must be a hardware problem.",

	"It must be a firewall issue.",

	"The third party API is not responding.",

	"Its a character encoding issue.",

	"That's just a small warning. It won't affect the output of the program.",

	"There's currently a problem with our hosting company.",

	"The third party documentation is wrong.",

	"You can't use that version on your system.",

	"I forgot to commit the code that fixes that.",

	"It's a known bug with the server software.",

	"You must be missing some of the dependencies.",

	"There must be something strange in your data.",

	"It's a known bug with the programming language.",

	"That's already fixed it just hasn't taken effect yet.",

	"The code is compiling.",

	"The client must have been hacked.",

	"It works, but it's not been tested.",

	"I can't test everything.",

	"Our hardware is too slow to cope with demand.",

	"I did a quick fix last time but it broke when we rebooted.",

	"Did you check for a virus on your system?",

	"Our redundant systems must have failed as well.",

	"The third party documentation doesn't exist.",

	"The unit test doesn't cover that eventuality.",

	"Oh, that was only supposed to be a placeholder.",

	"Oh, that was just a temporary fix.",

	"We outsourced that months ago.",

	"Don't worry, that value is only wrong half of the time.",

	"The WYSIWYG must have produced an invalid output.",

	"There was too little data to bother with the extra functionality at the time.",

	"It would take too long to rewrite the code from scratch.",

	"I didn't anticipate that I would make any errors.",

	"That was literally a one in a million error.",

	"We should have updated our software years ago.",

	"I didn't create that part of the program.",

	"I was told to stop working on that when something important came up.",

	"I couldn't find any examples of how that can be done anywhere online.",

	"It cannot be done and I'm not doing it.",

	"The existing design makes it difficult to do the right thing.",

	"We didn't have enough time to peer review the final changes.",

	"That's interesting, how did you manage to make it do that?",

	"I'll have to fix that at a later date.",

	"My time was split in a way that meant I couldn't do either project properly.",

	"The program has never collected that information.",

	"I haven't had any experience with that before.",

	"This is a previously known bug you told me not to work on yet.",

	"That wasn't in the original specification.",

	"The original specification contained conflicting requirements.",

	"The specifications were ambiguous.",

	"I haven't had the chance to run that code yet.",

	"I thought I fixed that.",

	"That code was written by the last guy.",

	"The person responsible doesn't work here anymore.",

	"That's the fault of the graphic designer.",

	"Well at least we know not to try that again.",

	"What did you type in wrong to get it to crash?",

	"I usually get a notification when that happens."
);

function get_excuse() {
	return excuses[Math.floor(Math.random() * excuses.length)];
}

function load_excuse() {
	document.querySelector('.main-title').innerHTML = `${get_excuse()}`
}


