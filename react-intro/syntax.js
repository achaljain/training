// The desired HTML:
<form>
    <label for="email">Email:</label>
    <input type="email" id="email" class="form-control" />
</form>


// How to represent it with React:
React.createElement("form",
                    null, 
                    React.createElement("label",
                                        { 
                                            htmlFor: "email" 
                                        }, 
                                        "Email:"
                                        ),
                     React.createElement("input",
                                        {                                
                                            type: "email", 
                                            id: "email", 
                                            className: "form-control" 
                                        })
);


//JSX
<form>
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" className="form-control" />
</form>