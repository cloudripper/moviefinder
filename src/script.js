class MovieFinder extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
                <div className="row text-center mt-5">
                    <div className="mt-5 mx-auto border bg-dark rounded holder">
                        <h3 className="my-3 title">Movie Finder</h3>
                        <form onSubmit="">
                            <div className="my-3">
                                <input className="border rounded bg-light" onChange="" type="text" value="title" placeholder="Movie Title" />
                                <button className="btn btn-sm btn-primary ml-2 py-1" type="submit" value="submit">Search</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        )
    }

}

ReactDOM.render(
    <MovieFinder />,
    document.getElementById('root')
);