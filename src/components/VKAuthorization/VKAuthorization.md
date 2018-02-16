# Authorization Widget

Using Authorization widget you can easily provide users with the possibility to be authorized on your resource. Before authorization, users can view their photos and photos of their friends who are already authorized.

Widget supports two types of authorization:
* standard — user will be redirected to URL specified in **authUrl** parameter with the following fields: **uid, first_name, last_name, photo, photo_rec, hash**.
* dynamic — after authorization, onAuth function will be called with the **data** object containing **uid, first_name, last_name, photo, photo_rec, session, hash** fields. User will also be authorized in openApi.

To check authorization you can use the received **hash** parameter and compare it to **md5** signature of **app_id+user_id+secret_key**, e.g. **md5(194253766748fTanppCrNSeuYPbA4ENCo**).

Widget can also be used together with other widgets and [Open API](https://vk.com/dev/openapi).
(see: [Authorization](https://vk.com/dev/Login))