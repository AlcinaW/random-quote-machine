var getNewQuote = function() {
var quotes =[
  { 
    text: "Woof woof woof.", 
    source: "Gabriel",
    img: "http://57.media.tumblr.com/cd4cc4f29ea376dc7faa3ae9459e2308/tumblr_n51z48PHjg1qe2obpo10_r1_500.gif"
  },
  { 
    text: "Just a whisper. I hear it in my ghost.", 
    source: "Motoko Kusanagi",
    img: "http://45.media.tumblr.com/9cc61fcc85b74f5cad4e2ed56bbb5be2/tumblr_njdh9bNZjn1tfluxko8_250.gif"
  },
  { 
    text: "If you've got a problem with the world, change yourself. If that's a problem, close your eyes, shut your mouth, and live like a hermit. And if that's a problem…", 
    source: "Motoko Kusanagi",
    img: "https://s-media-cache-ak0.pinimg.com/originals/36/e3/b1/36e3b16f35a6b6109686ac806b2fccc1.jpg"
  },
  { 
    text: "That's not true. What you and the others have gained makes you far from powerless.", 
    source: "Motoko Kusanagi",
    img: "http://45.media.tumblr.com/9cc61fcc85b74f5cad4e2ed56bbb5be2/tumblr_njdh9bNZjn1tfluxko8_250.gif"
  },
  { 
    text: "I have to admit, for a movie it wasn't bad- but diversionary entertainment is transitory, it just comes and goes at the viewers whim. It's the way it should be, but a film with no beginning or end that hooks an audience and won't let go of them is harmful no matter how wonderful you may have believed it was.", 
    source: "Motoko Kusanagi",
    img: "https://s-media-cache-ak0.pinimg.com/originals/36/e3/b1/36e3b16f35a6b6109686ac806b2fccc1.jpg"
  },
  { 
    text: "No, I'm not. But dreams are meaningful when you work toward them in the real world. If you merely live within the dreams of other people, it's no different from being dead.", 
    source: "Motoko Kusanagi",
    img: "http://45.media.tumblr.com/9cc61fcc85b74f5cad4e2ed56bbb5be2/tumblr_njdh9bNZjn1tfluxko8_250.gif"
  },
  { 
    text: "I feel confined, only free to expand myself within boundaries.", 
    source: "Motoko Kusanagi",
    img: "https://s-media-cache-ak0.pinimg.com/originals/36/e3/b1/36e3b16f35a6b6109686ac806b2fccc1.jpg"
  },
  { 
    text: "If we all reacted the same way, we'd be predictable, and there's always more than one way to view a situation. What's true for the group is also true for the individual. It's simple: overspecialize, and you breed in weakness. It's slow death.", 
    source: "Motoko Kusanagi",
    img: "http://45.media.tumblr.com/9cc61fcc85b74f5cad4e2ed56bbb5be2/tumblr_njdh9bNZjn1tfluxko8_250.gif"
  },
  { 
    text: "If a technological feat is possible, man will do it. Almost as if it’s wired into the core of our being.", 
    source: "Motoko Kusanagi",
    img: "https://s-media-cache-ak0.pinimg.com/originals/36/e3/b1/36e3b16f35a6b6109686ac806b2fccc1.jpg"
  },
  { 
    text: "I thought what I'd do was, I'd pretend I was one of those deaf-mutes.", 
    source: "The Laughing Man",
    img: "https://49.media.tumblr.com/18426f382ba465462c98f1ee041c2170/tumblr_n62o6k5qgB1tu9bwyo1_500.gif"
  },
  { 
    text: "Welcome. You took longer than I expected.", 
    source: "The Laughing Man",
    img: "http://45.media.tumblr.com/43811fad5064a18215f8d9b1ea072571/tumblr_ntdna42StO1qe8ju4o1_500.gif"
  },
  { 
    text: "Or should I?", 
    source: "The Laughing Man",
    img: "https://49.media.tumblr.com/18426f382ba465462c98f1ee041c2170/tumblr_n62o6k5qgB1tu9bwyo1_500.gif"
  },
  { 
    text: "You could put it like that, I suppose. 'I am the machine that reveals the world to you as only I alone am able to see it.'", 
    source: "The Laughing Man",
    img: "http://45.media.tumblr.com/43811fad5064a18215f8d9b1ea072571/tumblr_ntdna42StO1qe8ju4o1_500.gif"
  },
  { 
    text: "You know what I'd like to be? I mean if I had a goddamn choice, I'd just be the catcher in the rye and all.", 
    source: "The Laughing Man",
    img: "https://49.media.tumblr.com/18426f382ba465462c98f1ee041c2170/tumblr_n62o6k5qgB1tu9bwyo1_500.gif"
  },
  { 
    text: "Who knew that copies could still be produced despite the absence of the original? If you had to give a name to this phenomenon, what would you label it?", 
    source: "The Laughing Man",
    img: "http://45.media.tumblr.com/43811fad5064a18215f8d9b1ea072571/tumblr_ntdna42StO1qe8ju4o1_500.gif"
  },
  { 
    text: "A basic rule of thumb about hackers is that we live to peek at things that others have hidden, it's our nature. But, the depth of darkness in the hotbed of corruption that I had tried to challenge defeated me, and all I could do was become a deaf-mute, and avert my eyes from it all. Just as you've done these past six years. The Laughing Man, hmm, that was a catchy name they came up with. And here I've been thinking that if I was unsuccessful in persuading you, I'd simply follow Holden's quote and disappear. They went with the Salinger angle, too, good grief.", 
    source: "The Laughing Man",
    img: "https://49.media.tumblr.com/18426f382ba465462c98f1ee041c2170/tumblr_n62o6k5qgB1tu9bwyo1_500.gif"
  },
  { 
    text: "Hell, this is my own life. How I decide to waste it is my own damn business.", 
    source: "Batou",
    img: "http://45.media.tumblr.com/1f62e511997d2ffb0e77b04d6b84e01a/tumblr_njdh9bNZjn1tfluxko4_250.gif"
  },
  { 
    text: "I guess once you start doubting, there's no end to it.", 
    source: "Batou",
    img: "http://45.media.tumblr.com/920b247def4fbd5be8f9d3b23325004b/tumblr_nonv6kS2eF1tes8zmo2_500.gif"
  },
  { 
    text: "That's all it is: information. Even a simulated experience or a dream; simultaneous reality and fantasy. Any way you look at it, all the information that a person accumulates in a lifetime is just a drop in the bucket.", 
    source: "Batou",
    img: "http://45.media.tumblr.com/1f62e511997d2ffb0e77b04d6b84e01a/tumblr_njdh9bNZjn1tfluxko4_250.gif"
  },
  { 
    text: "No matter how many prosthetic bodies you've went through this was the one thing that was always ticking away, keeping the same time as you. Nowadays thats far to fleeting, people entrust their memories to external devices because they want to set down solid psyical proof that can distinguish them as unique individuals. That watch is all you have though, isn't it? Your only external mnemonic device that identifies the person you've been up to this minute.", 
    source: "Batou",
    img: "http://45.media.tumblr.com/920b247def4fbd5be8f9d3b23325004b/tumblr_nonv6kS2eF1tes8zmo2_500.gif"
  },
  { 
    text: "Hey, we don't even know its capabilities and we're going in with Tachikomas.", 
    source: "Batou",
    img: "http://45.media.tumblr.com/1f62e511997d2ffb0e77b04d6b84e01a/tumblr_njdh9bNZjn1tfluxko4_250.gif"
  },
  { 
    text: "You son of a bitch; who the hell do you think we are?", 
    source: "Batou",
    img: "http://45.media.tumblr.com/920b247def4fbd5be8f9d3b23325004b/tumblr_nonv6kS2eF1tes8zmo2_500.gif"
  },
  { 
    text: "Don't come crying to me if you get blown away.", 
    source: "Togusa",
    img: "http://57.media.tumblr.com/8c6477c4d4a0fbfea1420513806eb728/tumblr_njdh9bNZjn1tfluxko6_250.gif"
  },
  { 
    text: "In that fleeting moment when I was facing off against the Major, I envisioned the outcome of our exchange of fire, and the hairs on the back of my neck stood on end. After assessing the situation and taking all the factors into account, my experiences as a sniper led me to one conclusion: I was about to die.", 
    source: "Saito",
    img: "http://45.media.tumblr.com/997ef0a757aef98ead16cca58b87e10d/tumblr_njdh9bNZjn1tfluxko5_250.gif"
  },
  { 
    text: "Just like wine, some human relationships need time to mature.", 
    source: "Daisuke Aramaki",
    img: "http://45.media.tumblr.com/0a52b922a8930d48fce7d7ed976efe9e/tumblr_njdh9bNZjn1tfluxko7_250.gif"
  },
  { 
    text: "There has never been a report about a stomach ache or any other related medical trauma from swallowing your pride.", 
    source: "Daisuke Aramaki",
    img: "http://45.media.tumblr.com/0a52b922a8930d48fce7d7ed976efe9e/tumblr_njdh9bNZjn1tfluxko7_250.gif"
  },
  { 
    text: "Bring it on!", 
    source: "Tachikoma",
    img: "https://57.media.tumblr.com/8ad6f7ff196e3e784369119b75ca65b2/tumblr_mwcdk8To9V1src1c6o1_500.gif"
  },
  { 
    text: "Wow, if that's true, maybe we could link up with someone who's meditating , and download enlightenment!", 
    source: "Tachikoma",
    img: "http://57.media.tumblr.com/f3feccbc7397b82760fe70b8a5b5a4e0/tumblr_n13pwycrMt1rgptwko1_500.gif"
  },
  { 
    text: "He's so lucky! He broke down! Maybe they'll do a structural analysis on him!", 
    source: "Tachikoma",
    img: "https://57.media.tumblr.com/8ad6f7ff196e3e784369119b75ca65b2/tumblr_mwcdk8To9V1src1c6o1_500.gif"
  },
  { 
    text: "He's so lucky! He broke down! Maybe they'll do a structural analysis on him!", 
    source: "Tachikoma",
    img: "http://57.media.tumblr.com/f3feccbc7397b82760fe70b8a5b5a4e0/tumblr_n13pwycrMt1rgptwko1_500.gif"
  },
  { 
    text: "Harima Research Academy is the place where our neurochips were made. A triumphant return to our birthplace.", 
    source: "Tachikoma",
    img: "https://57.media.tumblr.com/8ad6f7ff196e3e784369119b75ca65b2/tumblr_mwcdk8To9V1src1c6o1_500.gif"
  },
  { 
    text: "Harima Research Academy is the place where our neurochips were made. A triumphant return to our birthplace.", 
    source: "Tachikoma",
    img: "http://57.media.tumblr.com/f3feccbc7397b82760fe70b8a5b5a4e0/tumblr_n13pwycrMt1rgptwko1_500.gif"
  },
  { 
    text: "I've got a better idea of the internal design, but it looks like this thing's not equipped with any autonomous functions to output its condition to the outside. You mean it can't even talk? It's a sub-Turing machine!", 
    source: "Tachikoma",
    img: "https://57.media.tumblr.com/8ad6f7ff196e3e784369119b75ca65b2/tumblr_mwcdk8To9V1src1c6o1_500.gif"
  },
  { 
    text: "A curious dilemma. Because if what it said is true, that means it wasn't lying. And if what it said is false, that would mean that it does tell the truth. How do you resolve this perplexing contradicton?", 
    source: "Tachikoma",
    img: "http://57.media.tumblr.com/f3feccbc7397b82760fe70b8a5b5a4e0/tumblr_n13pwycrMt1rgptwko1_500.gif"
  },
  { 
    text: "Yeah! And you know that 'existence of God' thing that I had trouble understanding before? I think I am starting to understand it now. Maybe, just maybe, it's a concept that's similar to a zero in mathematics. In other words, it's a symbol that denies the absence of meaning, the meaning that's necessitated by the delineation of one system from another. In analog, that's God. In digital, it's zero. what do you think? Also, our basic construction is digital, right? So for the time being, no matter how much data we accumulate, we'll never have a ghost. But analog-based people like you, Batou-san, no matter how many digital components you add through cyberization or prosthetics, your ghost will never be damaged. Plus, you can even die 'cause you've got a ghost. You're so lucky. Tell me, what's it feel like to have a ghost?", 
    source: "Tachikoma",
    img: "https://s-media-cache-ak0.pinimg.com/originals/5b/a2/71/5ba271e5e07b3cbb1be23aaf2b1b5251.jpg"
  },
];

      var quote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quote").innerHTML =
        '<img src="' + quote.img + '">' +
        '<h5>' + quote.text + '</h5>' +
        '<p>' + '-' + '<em>' + quote.source + '</em>' + '</p>';
     
    truncateQuote = quote.text;
    tweet = truncateQuote.substr(0,70)
};


function tweetQuote(){
  window.open('http://twitter.com/intent/tweet?text=' + '"' + encodeURIComponent(tweet) + '..." GITS Random Quote Machine http://codepen.io/AlcinaW/full/xZqdMG via @kaitou_al',"_blank"); 
};


window.onload=getNewQuote;

