# Conversation

Utilities & types for working with [Application Binary Interfaces (ABIs)](https://docs.soliditylang.org/en/latest/abi-spec.html)

## Types

| Name                | Description                         |
| ------------------- | ----------------------------------- |
| [`Conversation.Conversation`](/fhub/extras/Conversation/types#conversationconversation) | Conversation is a type that represents a list of casts that are linked together via `parentUrl`s. Methods that return `Conversation` guarantee the ordering, meaning that the root cast comes first. |