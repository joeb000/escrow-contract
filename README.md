# escrow-contract
Simple barebones implementation of a 2-of-3 multi-sig escrow contract

# Intro

This contract is primarily designed for a use case where person A (Alice) needs a way to prove that they own money to person B (Bob) without paying Bob the full sum up front. At initialization, two known keys must be provided as well as an integer unix timestamp which will act as an expiration date. The contract creator is also given a key, so in this way, ether existing in the contract can not be withdrawn without two of the three keys signing off on the withdrawl.
