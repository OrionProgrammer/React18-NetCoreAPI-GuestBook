import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GuestService from "../../services/guestService";

export const GuestList = () => {
  const [guests, setGuests] = useState(null);

  useEffect(() => {
    GuestService.getAll().then((x) => setGuests(x));
  }, []);

  function deleteGuest(id) {
    setGuests(
      guests.map((x) => {
        if (x.id === id) {
          x.isDeleting = true;
        }
        return x;
      })
    );
    GuestService.delete(id).then(() => {
      setGuests((guests) => guests.filter((x) => x.id !== id));
    });
  }

  return (
    <>
<h4>Guest List</h4>
<hr></hr>
<Link to='../../guest/add' className="btn btn-dark">
             Create Guest
            </Link>

<p></p>

      <table id="dtGuests" className="table table-striped table-responsive hover">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Mobile</th>
            <th className="col-md-1"></th>
            <th className="col-md-1"></th>
          </tr>
        </thead>
        <tbody>
          {guests &&
            guests.map((guest) => (
              <tr key={guest.id}>
                <td>{guest.firstName}</td>
                <td>{guest.surname}</td>
                <td>{guest.email}</td>
                <td>{guest.mobile}</td>
                <td style={{ whiteSpace: "nowrap" }}>
                  <Link
                    to={`../../guest/edit/${guest.id}`}
                    className="btn btn-sm btn-primary mr-1"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                <button
                    onClick={() => deleteGuest(guest.id)}
                    className="btn btn-sm btn-danger"
                    disabled={guest.isDeleting}
                  >
                    {guest.isDeleting ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : (
                      <span>Delete</span>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          {!guests && (
            <tr>
              <td colSpan="4" className="text-center">
                <div className="spinner-border spinner-border-lg align-center"></div>
              </td>
            </tr>
          )}
          {guests && !guests.length && (
            <tr>
              <td colSpan="4" className="text-center">
                <div className="p-2">No Guests To Display</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default GuestList;
