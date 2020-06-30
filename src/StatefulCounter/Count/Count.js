import React from 'react';

const Count = (props) => {
  //syntax, instead of props.count, props.incrementCount, within render outside of return
  const {
    count,
    incrementCount
  } = props;

  return(
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Add</button>
    </div>
  )
}
export default Count;