import React, { useEffect } from "react";
import { useState } from "react";

import "./Signup.css";
function Signup() {
  /* Restaurant form */
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantPhone, setRestaurantPhone] = useState("");
  const [restaurantEmail, setRestaurantEmail] = useState("");
  const [restaurantPassword, setRestaurantPassword] = useState("");
  const [foodOptions, setRestarantOptions] = useState([]);

  /* Restaurant form end */

  /* Client form */
  const [role, setRole] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientCountry, setClientCountry] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPassword, setClientPassword] = useState("");
  const [clientfoodPreference, setClientFoodPreference] = useState([]);
  /*Client Form end */
  useEffect(() => {
    if (role === "restaurant") {
      document.getElementById("restaurantForm").style.display = "block";
      document.getElementById("clientForm").style.display = "none";
    } else if (role === "client") {
      document.getElementById("clientForm").style.display = "block";
      document.getElementById("restaurantForm").style.display = "none";
    }
  });

  return (
    /*--default page (no form)--*/
    <div id="signupDefault">
      <div className="container">
        <div id="welcomeSection">
          <h1>Welcome to our site!</h1>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
        <div id="formSection">
          <div id="roleRadios">
            <p>Are you signing up as a :</p>
            <div>
              <input
                type="radio"
                id="restaurant"
                name="role"
                value="restaurant"
                onClick={() => setRole("restaurant")}
              />
              <label>Restaurant</label>
            </div>
            <div>
              <input
                type="radio"
                id="client"
                name="role"
                value="client"
                onClick={() => setRole("client")}
              />
              <label>Client</label>
            </div>
          </div>

          <form
            id="restaurantForm"
            action="/signup"
            method="post"
            style={{ display: "none" }}
          >
            <div>
              
              <labe>name : </labe>
              <input
                type="text"
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
              />
            </div>
            <div>
              
              <labe>email : </labe>
              <input
                type="text"
                value={restaurantEmail}
                onChange={(e) => setRestaurantEmail(e.target.value)}
              />
            </div>
            <div>
              
              <labe>password : </labe>
              <input
                type="password"
                value={restaurantPassword}
                onChange={(e) => setRestaurantPassword(e.target.value)}
              />
            </div>
            <div>
              <labe>phone : </labe>
              <input
                type="number"
                value={restaurantPhone}
                onChange={(e) => setRestaurantPhone(e.target.value)}
              />
            </div>
            <div>
              
              <select
                name="foodOptions"
                id="foodOptions"
                value={foodOptions}
                onChange={(e) => setRestarantOptions(e.target.value)}
                
              >
                <option>vegan</option>
                <option>vegetarian</option>
                <option>lactose intolerant</option>
                <option>omnivore</option>
              </select>
            </div>
            <div>
              
              <input type="hidden" name="role" value="2" />
            </div>
            <input type="submit" value="submit" />
          </form>

          <form
            id="clientForm"
            action="/signup"
            method="post"
            style={{ display: "none" }}
          >
            <div>
              
              <labe>name : </labe>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            </div>
            <div>
              
              <labe>email : </labe>
              <input
                type="text"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
              />
            </div>
            <div>
              
              <labe>password : </labe>
              <input
                type="password"
                value={clientPassword}
                onChange={(e) => setClientPassword(e.target.value)}
              />
            </div>
            <div>
              <labe>phone : </labe>
              <input
                type="number"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
              />
            </div>
            <div>
              <labe>country : </labe>
              <input
                type="text"
                value={clientCountry}
                onChange={(e) => setClientCountry(e.target.value)}
              />
            </div>
            <div>
              <input type="hidden" name="role" value="1" />
            </div>
            <div>
              <select
                name="preference"
                id="foodPreference"
                value={clientfoodPreference}
                onChange={(e) => setClientFoodPreference(e.target.value)}
              >
                <option>vegan</option>
                <option>vegetarian</option>
                <option>lactose intolerant</option>
                <option>omnivore</option>
              </select>
            </div>
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
