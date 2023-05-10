import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddNewUser = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const number = form.number.value;
    const gender = form.gender.value;
    const status = form.status.value;
    const group = form.group.value;

    const object = { name, age, number, gender, status, group };
    console.log(object);

    fetch("https://book-bd-admin-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(object),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "User Inserted",
            text: "Want to add another User??",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Let's Back to User",
            confirmButtonText: "Insert Another",
          }).then((result) => {
            if (!result.isConfirmed) {
              navigate("/");
            } else {
              form.reset();
            }
          });
        }
      });
  };
  return (
    <div className="w-7/12 mx-auto my-10">
      <h2 className="text-5xl font-bold my-5">Add A New DONOR</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-6 my-10 gap-10">
        {/* name  */}
        <div className="name col-span-4">
          {/* <p className="text-xl ">Enter Your Name</p> */}
          <input
            className="border-l-2 w-full border-b-2 border-base-300 outline-none text-lg p-2 focus:border-green-400"
            type="text"
            name="name"
            id=""
            placeholder="Full Name"
            required
          />
        </div>

        {/* age */}
        <div className="name col-span-2">
          {/* <p className="text-xl ">Enter Your Contact Number</p> */}
          <input
            className="border-l-2 w-full border-b-2 border-base-300 outline-none text-lg p-2 focus:border-green-400"
            type="text"
            name="age"
            id=""
            placeholder="Your Age "
            required
          />
        </div>
        <div className="name col-span-2">
          {/* Number  */}
          {/* <p className="text-xl ">Enter Your Contact Number</p> */}
          <input
            className="border-l-2 w-full border-b-2 border-base-300 outline-none text-lg p-2 focus:border-green-400"
            type="text"
            name="number"
            id=""
            placeholder="Contact-number"
            required
          />
        </div>
        {/* gender  */}
        <div className="name col-span-2 place-items-center flex text-slate-700">
          <span className="text-xl mr-6 text-slate-600">Gender </span>
          <input
            type="radio"
            name="gender"
            className="radio radio-accent"
            value={"male"}
            defaultChecked
          />{" "}
          <span className="text-xl mr-6 ml-1">Male</span>
          <input
            type="radio"
            name="gender"
            className="radio radio-accent"
            value="female"
          />
          <span className="text-xl mr-6 ml-1">Female</span>
        </div>

        <div className="name col-span-3 place-items-center flex text-slate-700">
          <span className="text-xl mr-6 text-slate-600">
            Choose Donation Status{" "}
            <select
              name="status"
              id=""
              className="mt-5 select select-bordered w-full max-w-xs"
            >
              <option value="true"> Available</option>
              <option value="false" selected>
                not Available
              </option>
            </select>
          </span>
        </div>
        <div className="name col-span-3 place-items-center flex text-slate-700">
          <span className="text-xl mr-6 text-slate-600">
            Choose Blood Group{" "}
            <select
              name="group"
              id=""
              className="mt-5 select select-bordered w-full max-w-xs"
            >
              <option value="A+"> (A+) POSITIVE</option>
              <option value="AB+"> (AB+) POSITIVE</option>
              <option value="B+"> (B+) POSITIVE</option>
              <option value="O+"> (O+) POSITIVE</option>
              <option value="A-"> (A-) POSITIVE</option>
              <option value="AB-"> (AB-) POSITIVE</option>
              <option value="B-"> (B-) POSITIVE</option>
              <option value="O-"> (O-) POSITIVE</option>
            </select>
          </span>
        </div>
        <div className="col-span-6 space-x-5">
          <button
            type="submit"
            className="btn btn-dark hover:border-b-4 border-b-emerald-500"
          >
            Add New User
          </button>

          <Link to="/">
            <button className="btn btn-dark hover:border-b-4 border-b-emerald-500">
              Back To User List
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddNewUser;
