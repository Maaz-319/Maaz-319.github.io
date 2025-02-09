const textArea = document.querySelector('.typingTest__textArea');
const showingField = document.querySelector('.typingTest__showingField');
const messageArea = document.getElementById('message');
const paragraphs1 = ["The sun rose over the hills, spreading warm light across the fields. Birds chirped in joy, greeting a new day. Children ran outside to play while farmers tended to their crops. The air was fresh, and a gentle breeze carried the sweet scent of blooming flowers. A dog barked cheerfully, chasing a fluttering butterfly. Life in the countryside was peaceful and simple. People gathered to share stories and laughter. The little village thrived on love, trust, and hard work. As the day ended, the sky turned orange, signaling bedtime for all.", "The beach was calm and peaceful. Waves gently kissed the shore, leaving behind sparkling seashells. Families gathered under colorful umbrellas, enjoying the bright day. Children built sandcastles and laughed as the waves washed them away. A few people flew kites that danced happily in the sky. The salty breeze refreshed everyone, adding to the joy. Some played volleyball, cheering with every point scored. The sound of seagulls filled the air. As the sun began to set, the sky turned golden, painting a picture-perfect scene. It was a day filled with happiness and nature's beauty.", "A walk in the park is always refreshing. Green trees line the pathways, offering shade to those who stroll beneath them. Birds sing from the branches, creating a symphony of natural music. Flowers bloom in every color imaginable, adding beauty to the scene. People jog, walk their dogs, or simply relax on benches. Children play with joy, their laughter echoing in the air. The gentle breeze carries the sweet scent of grass and blossoms. Time seems to slow down here, giving everyone a moment of peace. Nature has a magical way of calming the mind and heart.", "A cat sat lazily on the windowsill, basking in the warm afternoon sun. Its fur gleamed as it stretched out its paws. The world outside was alive with activity. Birds chirped merrily, and leaves rustled in the wind. The cat's sharp eyes followed a butterfly fluttering nearby. With a sudden leap, it tried to catch the elusive insect but failed. Undeterred, the cat settled back down, watching the world with quiet curiosity. Life inside the cozy house was peaceful. The soft ticking of a clock filled the air, marking the passing of a lazy, sunny afternoon."];
const paragraphs2 = ["It was a chilly morning, and frost covered the grass. People wrapped in warm coats hurried along the street. A baker's shop filled the air with the delicious aroma of fresh bread. The sound of car horns echoed as traffic picked up. A street musician played a cheerful tune, bringing smiles to passersby. The cold breeze nipped at everyone's faces, but the warmth of friendly greetings made up for it. Shops opened their doors, and life in the town began its usual hustle and bustle. Despite the cold, it was a beautiful winter morning filled with energy and life.", "The ancient library was a place of wonder and knowledge. Rows of towering bookshelves stretched endlessly, each filled with countless tomes. Dust motes danced in the streams of light filtering through stained-glass windows. A soft hush enveloped the room, broken only by the rustle of pages and the creak of old wooden chairs. Scholars immersed themselves in the wisdom of centuries past, lost in worlds created by brilliant minds. Time seemed irrelevant here. The scent of aged paper lingered in the air, creating a timeless ambiance. The library was a sanctuary where knowledge met imagination in perfect harmony.", "The thunderstorm roared outside, rattling windows and shaking trees. Dark clouds loomed ominously overhead, casting shadows across the landscape. Raindrops pelted the roof with relentless force, creating a rhythmic symphony. Flashes of lightning illuminated the sky, followed by deafening booms. Despite the chaos outside, there was a strange beauty in the storm. People watched from their windows, mesmerized by nature's raw power. The air smelled fresh and earthy, cleansed by the rain. As the storm began to wane, a sense of calm returned. The world felt renewed, as though nature had hit a reset button for all living beings.", "The bustling city never seemed to sleep. Neon lights flickered in vibrant hues, illuminating the crowded streets. Skyscrapers reached for the stars, their windows shimmering like jewels. The aroma of street food mingled with the scent of gasoline, creating an urban bouquet. People hurried past one another, each with their own story to tell. The sound of car horns and chatter filled the air, forming a chaotic symphony. Amid the rush, a street performer played a soulful tune, capturing the attention of passersby. The city pulsed with life, a living organism fueled by ambition and dreams."]
let paragraph = null;
let words = null;
let wordIndex = null;
let correctWords = null;
let wrongWords = null;

document.getElementById('calc').innerHTML = 'Press Enter to start the test';
document.getElementById('calc').focus();

function start_the_test() {
    textArea.focus();
    let time = 30;
    document.getElementById('calc').innerHTML = `${time} s`;

    showingField.innerHTML = '';
    words.forEach((word, index) => {
        showingField.innerHTML += `<span id="word-${index}">${word} </span>`;
    });


    textArea.addEventListener('input', (e) => {
        if (e.data === ' ') {
            handleWordHighlight();
        }
    });

    const timerInterval = setInterval(() => {
        time--;
        document.getElementById('calc').innerHTML = `${time} s`;
        if (time <= 0) {
            clearInterval(timerInterval);
            textArea.disabled = true;
            const speed = Math.floor(textArea.value.length / 5) / 0.5;
            let accuracy = handleRightWrongWords();
            accuracy = accuracy.correctWords / (accuracy.correctWords + accuracy.wrongWords);
            document.getElementById('calc').innerHTML = `<span class="text-white mb-8">Typing Speed</span><br>Typed Speed x Accuracy = Correct Speed<br>${speed} WPM x ${Math.round(accuracy * 100, 0)}% = <span class="text-green-400 text-2xl border-2 rounded-lg px-2">${Math.ceil(speed * accuracy)} WPM</span>`;
            messageArea.innerText = "Press Enter to start the test";
            enableEnterKeyListener();
        }
    }, 1000);
}

function handleWordHighlight() {
    const inputWords = textArea.value.split(' ');
    for (let i = 0; i < inputWords.length; i++) {
        currentWord = document.getElementById(`word-${wordIndex}`)
        if (i == wordIndex + 1) {
            currentWord.style.color = 'lightgreen';
            wordIndex++;
        } else {
            document.getElementById(`word-${wordIndex}`).style.color = 'pink';
        }
    }
}

function handleRightWrongWords() {
    const inputWords = textArea.value.trim().split(' ');
    let orignalWords = paragraph.split(' ');
    orignalWords = orignalWords.slice(0, inputWords.length);
    inputWords.forEach((word, index) => {
        word = word.split('');
        word.forEach((char, i) => {
            if (char === orignalWords[index][i]) {
                correctWords++;
            } else {
                wrongWords++;
            }
        });
    });

    correctWords = Math.ceil(correctWords / 5);
    wrongWords = Math.ceil(wrongWords / 5);

    return {
        correctWords,
        wrongWords
    };
}

function reset_the_test() {
    disableEnterKeyListener()
    textArea.disabled = false;
    showingField.innerHTML = '';
    const num = Math.floor(Math.random() * 2);
    if (num === 0) {
        paragraph = paragraphs1[Math.floor(Math.random() * paragraphs1.length)];
    } else {
        paragraph = paragraphs2[Math.floor(Math.random() * paragraphs2.length)];
    }
    words = paragraph.split(' ');
    messageArea.innerText = "Start Typing";
    textArea.value = '';
    wordIndex = 0;
    correctWords = 0;
    wrongWords = 0;
}

function handleEnterKey(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        reset_the_test();
        start_the_test();
    }
}
function enableEnterKeyListener() {
    document.addEventListener('keydown', handleEnterKey);
}

function disableEnterKeyListener() {
    document.removeEventListener('keydown', handleEnterKey);
}

enableEnterKeyListener();

textArea.onpaste = function (event) {
    event.preventDefault();
    messageArea.style.color = 'pink';
    messageArea.innerText = "! Pasting Not Allowed !";
    setTimeout(() => {
        messageArea.style.color = 'lightgreen';
        messageArea.innerText = "Start Typing";
    }, 3000);
};