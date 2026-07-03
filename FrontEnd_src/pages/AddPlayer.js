import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; 
import PlayerService from "../services/player.service";

function AddPlayer() {
    const navigate=useNavigate();
    const values={
        playerName:"",
        jerseyNumber:"",
        role:"",
        totalMatches:"",
        teamName:"",
        countryName:"",
        description:""
    };

    const validationSchema=Yup.object({
        playerName:Yup.string()
            .required("Player Name is required")
            .min(2,"Minimum 2 characters")
            .max(50,"Maximum 50 characters")
            .matches(/^[A-Za-z ]+$/,"Only letters are allowed"),

        jerseyNumber:Yup.number()
            .required("Jersey Number is required")
            .min(1,"Minimum value is 1")
            .max(999,"Maximum value is 999"),

        role:Yup.string()
            .required("Role is required"),

        totalMatches:Yup.number()
            .required("Total Matches is required")
            .min(0,"Cannot be negative"),

        teamName:Yup.string()
            .required("Team Name is required")
            .matches(/^[A-Za-z ]+$/, "Only letters are allowed"),

        countryName:Yup.string()
            .required("Country Name is required")
            .matches(/^[A-Za-z ]+$/,"Only letters are allowed"),

        description:Yup.string()
            .required("Description is required")
            .max(500,"Maximum 500 characters")
    });

    const save=(values) => {
        PlayerService.create(values)
            .then(()=>{
                navigate("/");
            })
            .catch((e)=>{
                console.log(e);
            });
    };

    return (
        <div className="container mt-4">
        <h2>Add Player</h2>
        <Formik
            values={values}
            validationSchema={validationSchema}
            onSubmit={save}>
         <Form>
        <div className="mb-3">
          <label>Player Name</label>
           <Field type="text" name="playerName" className="form-control"/>
            <ErrorMessage name="playerName" component="div" className="text-danger"/>
       </div>

       <div className="mb-3">
         <label>Jersey Number</label>
          <Field type="number" name="jerseyNumber" className="form-control"/>
           <ErrorMessage name="jerseyNumber" component="div" className="text-danger"/>
        </div>

       <div className="mb-3">
         <label>Role</label>
          <Field as="select" name="role" className="form-control">
           <option value="">Select Role</option>
           <option value="Batsman">Batsman</option>
          <option value="Bowler">Bowler</option>
           <option value="Keeper">Keeper</option>
        <option value="All Rounder">All Rounder</option>
       </Field>
       <ErrorMessage name="role"  component="div"  className="text-danger"/>
       </div>

       <div className="mb-3">
       <label>Total Matches</label>
       <Field type="number" name="totalMatches" className="form-control"/>
       <ErrorMessage name="totalMatches" component="div"  className="text-danger"/>
      </div>

     <div className="mb-3">
     <label>Team Name</label>
     <Field type="text" name="teamName"  className="form-control"/>
     <ErrorMessage name="teamName" component="div" className="text-danger" />
     </div>

      <div className="mb-3">
     <label>Country Name</label>
     <Field type="text" name="countryName" className="form-control"/>
     <ErrorMessage name="countryName" component="div" className="text-danger"/>
     </div>

        <div className="mb-3">
       <label>Description</label>
       <Field as="textarea" name="description" className="form-control"/>
      <ErrorMessage name="description" component="div" className="text-danger"/>
      </div>

    <button  type="submit" className="btn btn-success me-2">Save</button>
   <button type="button" className="btn btn-secondary" onClick={()=>navigate("/")}>Back</button>
    </Form>
    </Formik>
        </div>
    );
}
export default AddPlayer;
