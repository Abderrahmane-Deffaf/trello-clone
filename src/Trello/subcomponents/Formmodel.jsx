import React from "react";
import illustration from '../../assets/trello/graphics/model.svg'

const Formmodel = () => {
  return (
    <div className="flex rounded-md overflow-hidden">
      <div className="basis-1/2 flex justify-center items-center">
        <form className="bg-white w-[80%]  text-black ">
          <h2 className="font-bold text-xl">Let's build a Workspace</h2>
          <p>
            Boost your productivity by making it easier for everyone to access
            boards in one location.
          </p>
          <label htmlFor="workspacename">
            Workspace name
            <input type="text" name="workspacename" placeholder="Taco's Co." />
          </label>
          <small>This is the name of your company, team or organization.</small>
          <select>
            
            <option value="hello"> hello</option>
            <option value="hello"> hello</option>
            <option value="hello"> hello</option>
            <option value="hello"> hello</option>
          </select>
          <label htmlFor="workspaceDescription">
            Workspace Dectription <span>Optional</span>
            <textarea name="workspaceDescription" className=" resize-none " />
          </label>
          <small>
            Get your members on board with a few words about your Workspace.
          </small>
          <button>continue</button>
        </form>
      </div>

      <div className="sidebg basis-1/2 min-h-full flex justify-center items-center">
        <img src={illustration} />
      </div>
    </div>
  );
};

export default Formmodel;
