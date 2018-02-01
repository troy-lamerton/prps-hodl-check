# intro

Want to make a small page where anyone can check their hodled Purpose.

Discovered:
Every hodl is stored in a private mapping of [creator & id] to hodl object.

You MUST have the __hodl id__ and __address__ of the person who hodled the Purpose,
to get the hodl objects.


# New approach:

It is much better to go through the history of all hodlFor transactions,
and check them for **users address**, --> store the hodl id.

Simple as this:
1. Get history of hodlFor transactions
1. Iterate over history
1. If beneficiary is me, store the hodl ID
1. hodl ID's found :)
