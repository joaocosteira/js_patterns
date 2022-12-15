# Client Side Render
- The example app foun in this dir (tick_app) is a simple app thta simply displays the time
- This app updates every second
- There's a simple div (the main app) which renders the App compoent data, which is just an header with the current time
- Simultaneasly, we have the js responsible for all the updates in the application.
- So the big advantage is in this kind of live data application, since everything is being managed at the client side, there's **no round trip between the updates**, everything is done at the client side.