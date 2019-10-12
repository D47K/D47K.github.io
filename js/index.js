//Inicial
var Header = function Header() {
  return React.createElement(
    "div",
    { className: "row header-profile capa-header " },
    React.createElement(
      "div",
      { className: "col-12 d-flex justify-content-center person-image p-0 " },
      React.createElement("img", {
        className: "rounded-circle img-profile shadow-box",
        src: "https://scontent.fmex10-2.fna.fbcdn.net/v/t1.0-9/30707719_1640298776039966_7798285058170893456_n.jpg?_nc_cat=110&_nc_oc=AQlbDbve5jIeefb0WBre4D-cBZrzZvMsgpITpPP4UHDFMOcZsGpF8uuaIOniGA0veYwHiYl8n1sJy7yyMyXpS4dF&_nc_ht=scontent.fmex10-2.fna&oh=2fbfefa5fa3f9f057a9a52b45a1c36ec&oe=5E2B9C93"
      })
    ),
    React.createElement(
      "div",
      { className: "col-12  d-flex  justify-content-center    " },
      React.createElement(
        "div",
        { className: "container person-card shadow-box  d-flex align-items-end p-1 rounded" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-12 " },
              React.createElement(
                "h4",
                { className: "text-center" },
                "Andres Hilario Vidal"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-12 " },
              React.createElement(
                "h6",
                { className: "text-center" },
                "Desarrollador Full Stack WEB, aplicaciones m\xF3viles y aplicaciones de escritorio"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-12 logos-social " },
              React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                  "div",
                  { className: "col-12 d-flex justify-content-center" },
                  React.createElement(
                    "a",
                    { href: "https://github.com/D47K" },
                    React.createElement("img", {
                      src: "../media/logos/icons8-github.svg",
                      className: "link",
                      alt: "github-logo"
                    })
                  ),
                  React.createElement(
                    "a",
                    { href: "https://www.facebook.com/andres.hilariovidal" },
                    React.createElement("img", {
                      src: "../media/logos/icons8-facebook.svg",
                      className: "link-fb",
                      alt: "facebook-logo"
                    })
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

var Bio = function Bio() {
  return React.createElement(
    "div",
    { className: "row bio-container" },
    React.createElement(
      "div",
      { className: "col" },
      React.createElement(
        "div",
        { className: "row p-3 mt-3 d-flex justify-content-center" },
        React.createElement(
          "p",
          { className: "bio-text" },
          "Hola, mi nombre es Andres Hilario Vidal soy un desarrollador",
          " ",
          React.createElement(
            "strong",
            null,
            "Full Stack Semi Senior"
          ),
          " Web, aplicaciones moviles y aplicaciones de escritorio."
        )
      )
    )
  );
};

var Index = function Index() {
  return React.createElement(
    "div",
    { className: "container-fluid p-0" },
    React.createElement(Header, null),
    React.createElement(Bio, null)
  );
};

ReactDOM.render(React.createElement(Index, null), document.getElementById("root"));