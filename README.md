# Running Aces

The project is a JavaScript-based website-oriented game.

## Game Overview

The game focuses around multiple players betting on cards. However, for this
implementation only one player will be allowed to place a bet on a card. At the
start of the round players can choose a specific card suit that they believe
will win the race. At this point, the race starts.

On the right-hand side of the cards is a stack of five face-down cards. Four
aces are laid down, and cards are flipped. As a card of a certain suit is
flipped, that corresponding ace will move upwards.

Five random cards are laid down in a random order on the right. When all four
cards have passed a card on the right, it will flip, and the corresponding card
will go back one space.

The winner of the race is the card that advances to the topmost space (six moves
total).

Finally, jokers are added into this grouping. Jokers are either red or black,
and will move both red cards or both black cards up or down.

## Assets Used

The SVG playing cards were originally developed by David Bellot and recreated by
Huub de Beer.
[You can check out their original projects here.](https://github.com/htdebeer/SVG-cards)

# License TL;DR

This project is distributed under the MIT license. This is a paraphrasing of a
[short summary](https://tldrlegal.com/license/mit-license).

This license is a short, permissive software license. Basically, you can do
whatever you want with this software, as long as you include the original
copyright and license notice in any copy of this software/source.

## What you CAN do:

-   You may commercially use this project in any way, and profit off it or the
    code included in any way;
-   You may modify or make changes to this project in any way;
-   You may distribute this project, the compiled code, or its source in any
    way;
-   You may incorporate this work into something that has a more restrictive
    license in any way;
-   And you may use the work for private use.

## What you CANNOT do:

-   You may not hold me (the author) liable for anything that happens to this
    code as well as anything that this code accomplishes. The work is provided
    as-is.

## What you MUST do:

-   You must include the copyright notice in all copies or substantial uses of
    the work;
-   You must include the license notice in all copies or substantial uses of the
    work.

If you're feeling generous, give credit to me somewhere in your projects.
