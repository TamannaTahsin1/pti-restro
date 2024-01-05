import { useForm } from "react-hook-form";

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        console.log(data)
      }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("Name")}
                  name="Name"
                  placeholder="food name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  {...register("Image")}
                  name="image"
                  placeholder="image url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  {...register("Image")}
                  name="image"
                  placeholder="image url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full my-2">
                                        <label className="label">
                                            <span className="label-text">Recommended?</span>
                                        </label>
                                        <select defaultValue="default" {...register('Category', { required: true })}
                                            className="select select-bordered w-full">                                         
                                            <option value="true">IsPopular</option>
                                            <option value="false">IsRecommended</option>
                                        </select>
                                    </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Item</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
