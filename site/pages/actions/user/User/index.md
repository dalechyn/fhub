# User

Actions related to User data retrieval, update, follows, etc.

## Functions

| Name                | Description                         |
| ------------------- | ----------------------------------- |
| [`User.follow`](/actions/user/User/follow) | Creates [`Link.Link`](/api/Link/types#link) follow creation message and sends it to Hub. |
| [`User.followByUsername`](/actions/user/User/followByUsername) | Creates [`Link.Link`](/api/Link/types#link) follow creation message and sends it to Hub. |
| [`User.followPreconstruct`](/actions/user/User/followPreconstruct) | Preconstructs [`Link.Link`](/api/Link/types#link) follow creation message without submitting it to Hub. |
| [`User.get`](/actions/user/User/get) | Get all User data by `fid` |
| [`User.getAllUserDataMessagesByFid`](/actions/user/User/getAllUserDataMessagesByFid) | Gets all [`UserData.UserData`](/api/UserData/types#userdata) messages by `fid`. |
| [`User.getBio`](/actions/user/User/getBio) | Get a bio of a user by `fid`. |
| [`User.getByFid`](/actions/user/User/getByFid) | Gets all [`UserData.UserData`](/api/UserData/types#userdata)s by `fid`. |
| [`User.getData`](/actions/user/User/getData) | Get a [`UserData.UserData`](/api/UserData/types#userdata) by `fid` and `type`. |
| [`User.getDisplay`](/actions/user/User/getDisplay) | Get a display name of a user by `fid`. |
| [`User.getLocation`](/actions/user/User/getLocation) | Get location of a user by `fid`. |
| [`User.getPfp`](/actions/user/User/getPfp) | Get pfp url of a user by `fid`. |
| [`User.getUrl`](/actions/user/User/getUrl) | Get associated url of a user by `fid`. |
| [`User.getUsername`](/actions/user/User/getUsername) | Get username of a user by `fid`. |
| [`User.update`](/actions/user/User/update) | Creates [`UserData.UserData`](/api/UserData/types#userdata) update message and sends it to Hub. |
| [`User.updatePreconstruct`](/actions/user/User/updatePreconstruct) | Preconstructs [`UserData.UserData`](/api/UserData/types#userdata) update message without submitting it to Hub. |