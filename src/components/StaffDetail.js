import React from "react"

function StaffWithId ({match}) {
    return (
    <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.dishId, 10))[0]} />
    )
}


export default StaffWithId