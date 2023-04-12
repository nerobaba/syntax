import React from "react"

export default function Student({ name, dispatch, id, isHere }) {
  return (
    <div>
      <span
        onClick={() => {
          dispatch({ type: "ishere-student", payload: { id } })
        }}
        style={{ textDecoration: isHere ? "line-through" : "none", color: isHere ? "gray" : "black" }}
      >
        {name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: "delete-student", payload: { id } })
        }}
      >
        삭제
      </button>
    </div>
  )
}
