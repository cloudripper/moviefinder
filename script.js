var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieFinder = function (_React$Component) {
    _inherits(MovieFinder, _React$Component);

    function MovieFinder(props) {
        _classCallCheck(this, MovieFinder);

        return _possibleConstructorReturn(this, (MovieFinder.__proto__ || Object.getPrototypeOf(MovieFinder)).call(this, props));
    }

    _createClass(MovieFinder, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "row text-center mt-5" },
                    React.createElement(
                        "div",
                        { className: "mt-5 mx-auto border bg-dark rounded holder" },
                        React.createElement(
                            "h3",
                            { className: "my-3 title" },
                            "Movie Finder"
                        ),
                        React.createElement(
                            "form",
                            { onSubmit: "" },
                            React.createElement(
                                "div",
                                { className: "my-3" },
                                React.createElement("input", { className: "border rounded bg-light", onChange: "", type: "text", value: "title", placeholder: "Movie Title" }),
                                React.createElement(
                                    "button",
                                    { className: "btn btn-sm btn-primary ml-2 py-1", type: "submit", value: "submit" },
                                    "Search"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return MovieFinder;
}(React.Component);

ReactDOM.render(React.createElement(MovieFinder, null), document.getElementById('root'));