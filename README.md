# testlol

First, create a new react native project using the command react-native init projectname.

Next, install the necessary dependencies for your project, such as react-native-elements for UI components and redux for managing application state.

Create a new component for the group creation page, where the user can enter the group name and add members to the group. You can use TextInput from react-native-elements for the group name field and a FlatList to display a list of added members.

Create a redux store to manage the state of your app, including the current group and its members.

Create a component for the expenses page, where the user can add expenses to the group and specify how they were paid. You can use a FlatList to display a list of added expenses, and include fields for the expense amount and payment method (e.g. cash, credit card, etc.).

Connect your components to the redux store using the connect function from the react-redux library, and use redux actions and reducers to update the store when the user adds expenses or changes the group.

Add navigation to your app using a library like react-navigation, so the user can switch between the group creation page and the expenses page.

Test your app on a device or emulator to make sure it works as expected.
