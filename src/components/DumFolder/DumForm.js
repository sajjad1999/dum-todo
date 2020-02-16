import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import { changeName } from "../../Store/actions/actions";
import { myContext } from "../../App";

const DumForm = props => {
  const contextName = useContext(myContext);
  const [name, setName] = useState();
  const handleInputChange = e => {
    let name = e.target.value;
    setName(name);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (name && name.length > 0) {
      contextName.changeName(name);
      // props.dispatch(changeName(name))
    }
  };
  return (
    <div>
      <p>{contextName.name}</p>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleInputChange} />
        <button>submit</button>
      </form>

    </div>
  );
};

// const mapStateToProps = (state) => {
//     return {
//         name: state.name
//     }
// }

export default DumForm;
