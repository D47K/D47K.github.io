//Inicial
var Nav = function Nav() {
  return React.createElement(
    "h1",
    null,
    "Hola mundo!"
  );
};

ReacrDOM.render(React.createElement(Nav, null), document.getElementById("root"));