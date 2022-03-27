import "./users.css";

const Users = () => {
    return (
        <div className="card-container">
            <div className="title">Users</div>
            <form className="form-container">
                <input placeholder="Name" />
                <input placeholder="Email" />
                <button className="">Create User</button>
            </form>
        </div>
    );
};

export default Users;
