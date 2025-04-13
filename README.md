## Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Problem](#problem)
- [Data Collection](#data-collection)



## Introduction
Steganography is an encryption technique in which the Least Significant Bits (LSBs) in a file are altered to encode characters. These characters may be a harmless message, but they could also be used to run a malicious payload on your computer.

While steganography is difficult to conceal in many file formats, it thrives 
in visuals and other forms of digital multimedia. 
Intuitively, changing the LSBs in media forms would create a much
less noticeable difference in the file's output compared to other file formats.

(It is in fact for this reason we use a different, "more-lossy", internet protocol
for media streaming called UDP)

Let's take a look at the following image:
![Cartoon depiction of an office. Both depictions look the same but the one on the right has an encoded message in it using steganography](image.png)
Both cartoon depictions of an office look the same, however the one on the right
contains a secret message that has been encoded into the image using steganography
to alter the LSBs of the image file.

Now's the point in time where you might be thinking, "Wow this is so cool, I could use this to hide secret messages in images I send to my friends!"

... and yes...

you could
indeed have your own secret way of communicating with your besties using this
(and it would be far superior to whatever Greg and Rowley were trying to use here)
![Greg Heffley and Rowley Jefferson using their "secret coded language" to talk smack about Rowley's dad "behind his back"](image-2.png)
but this idea can also be used for some not so great stuff :\(



## Problem
In the past months, AI-powered steganography injection attacks have been rampant,
especially in images.
Hackers have been leveraging bots such as Duqu and Zbot which use AI to encode malicious Base 64 code in images.

The real danger of these attacks lies in its naiveté. Images are generally considered "trustworthy", "safe", and "not capable of causing a lot of damage". After all how much malicious code could possibly be in a tiny 100px by 100px image?
(The answer is enough to do a LOT of damage!)

Many antivirus solutions also overlook non-executable file formats such as images, 
which makes these attacks far more dangerous than other, "traditional" cyber attacks which antiviruses have an easier time identifying.

Finally, it is almost impossible to know you've downloaded and opened a 
hacked image just by looking at it. Many viruses make it clear that you've... well... done something not so great. 

Let's say you pirated a video game on your laptop and when you tried running it, 
you got error messages in Russian and now there's weird stuff going on with 
your laptop...

Yeah you're probably cooked at that point.

But what about steganographically injected images? Let's say my internet friend sent me this funny meme 
![Funny meme with the gru template being stuck in a recursive function](image-1.png)

I could laugh my socks off for 20 minutes straight and nothing would happen at all...

I would have no way of knowing that me opening this image now just leaked my IP address, or did some sort of other malicious task, on my computer.

And even worse... let's say I'm one of **THOSE** people who forward memes to every
person in their contact list. Now I've just leaked my IP address as well as every single friend on my contact list's IP address to some random person on the internet...

(At least if we go down, we all go down together)
![alt text](image-4.png)

Jokes aside, it is for this reason that steganography is so dangerous.
Viruses could spreading from computer to computer, meme to meme, across the internet and we would have no way of knowing.

In fact, this is why cybersecurity experts have a hard time quantifying the number
of steganographyically injected forms of media there are on the internet.

The only way we could possibly know if there is malicious code in a piece of media, would be to look at the binary of it.

However, there's millions if not billions of media on the internet. And even if 
someone *was* willing to look at the binary of every single media form, it certainly is not feasible to try to have humans decrypt the least significant bytes (LSBs in case you forgot!) of media online to possibly
try and figure out if there is malicious code in it.

We need a quicker, faster, stronger, human (that we also don't have to pay) to 
analyze the LSBs of media forms and see if there is malicious code in them
(did someone say AI??? 👀)

Since images are the most common form of multimedia on the internet, and due to
their prevalent usage in AI steganography attacks, I will be addressing them in this project.


## Data Collection
For this project I downloaded a [Kaggle database](e.com/datasets/marcozuppelli/stegoimagesdataset/data?select=dataset_information.csv) containing 44,000 images,
with 36,000 of those images containing some sort of steganography injection.

Unfortunately due to the physical limitations of my laptop, I was only able to train on 2000 images, 1000 with, and 1000 without steganography.

<iframe width="966" height="543" src="https://www.youtube.com/embed/GGjxZY5Ka0g" title="plankton - i am small" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>