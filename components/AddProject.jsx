import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProjectAction } from '../store/projectsSlice'

function AddProject()
{
  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const createProductImagesChange = (e) =>
  {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) =>
    {
      const reader = new FileReader();

      reader.onload = () =>
      {
        if (reader.readyState === 2)
        {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };
  const createProductSubmitHandler = (e) =>
  {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("category", category);

    images.forEach((image) =>
    {
      myForm.append("images", image);
    });

    const data = {
      name,
      category,
      websiteLink: link,
      images
    }
    console.log(data)
    dispatch(createProjectAction(data));
  };
  return (
    <div className='addProject' style={{backgroundColor:"#000",padding:"200px 0 100px",color:"#fff"}} >
      <div className="addProject__container">
        <form className="addProject__container__form" onSubmit={e => createProductSubmitHandler(e)}>
          <div className="addProject__container__form__item">
            <label>project name</label>
            <input type="text" onChange={e => setName(e.target.value)} />
          </div>
          <div className="addProject__container__form__item">
            <label>project category</label>
            <input type="text" onChange={e => setCategory(e.target.value)} />
          </div>
          <div className="addProject__container__form__item">
            <label>project link</label>
            <input type="text" onChange={e => setLink(e.target.value)} />
          </div>
          <div className="addProject__container__form__item">
            <label>project image </label>
            <input
              type="file"
              accept="image/*"
              onChange={createProductImagesChange}
              multiple
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default AddProject