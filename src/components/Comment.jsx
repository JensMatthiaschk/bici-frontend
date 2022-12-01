import React from 'react'

const Comment = () => {


    return (
        <Form method='post' action='/map'>
            <div className="form-control">
                <fieldset>

                    <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="tell somthing about the pin"></textarea>
                    <label className="label">
                        <span className="label-text-alt">Let know other cyclist what they can find here.<br /> Don't leave this blank!</span>

                    </label>
                    <div className="modal-action">

                        <button className="btn w-24" type="submit"  >

                        </button>

                    </div>
                </fieldset>

            </div>

        </Form>
    )
}

export default Comment