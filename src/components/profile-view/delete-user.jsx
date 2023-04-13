import { useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-bootstrap";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";

function DeleteUser ({ user }) {
    const token = window.localStorage.getItem("token");

    const deregisterUser = function () {
        const userWarning = confirm(
            `Are you sure? Deleting your account is permanent.` 
        );

        if (!userWarning) {
            toast.info("That wasa close!")
        } else {
            fetch(`https://movies-couch-api.vercel.app/users/${user.Username}`, 
                {
                    method: "DELETE",
                    headers: { 
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            )
                .then((response) => {
                    if(response.ok) {
                        toast.success("Account successfully deleted");
                        localStorage.clear();
                        window.location.reload();
                    } else {
                        toast.danger("Something went wrong");
                    }
                })
                 .catch((e) => console.log(e));
        }
    };
    
    return (
        <>
            <Button className="" onClick={deregisterUser} type="button">Delete Account</Button>
        </>
    )
}
export { DeleteUser };

DeleteUser.propTypes = {
    user: PropTypes.object,
    deregisterUser: PropTypes.func
}