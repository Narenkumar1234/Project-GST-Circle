import React from "react";

export default ()=>{
    return (
        <>
        <div className="lg:p-28 lg:pt-10 p-10 pt-3 ">
        <h1 className="text-center text-3xl font-extrabold pt-10 ">Get Started..</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
        <div class="card text-center shadow-2xl bg-red-100 m-4">

            <div class="card-body">
                <h2 class="card-title">₹1000/month</h2> 
                <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
                <div class="justify-center card-actions" >
                    <button class="btn btn-outline btn-accent">More info</button>
                </div>
            </div>
        </div>
        
        <div class="card text-center shadow-2xl bg-purple-200 m-4">
            <div class="card-body">
                <h2 class="card-title">₹300/month</h2> 
                <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
                <div class="justify-center card-actions" >
                    <button class="btn btn-outline btn-accent">More info</button>
                </div>
            </div>
        </div>
        
        <div class="card text-center shadow-2xl bg-yellow-200 m-4">
            <div class="card-body">
                <h2 class="card-title">₹1500/month</h2> 
                <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
                <div class="justify-center card-actions" >
                    <button class="btn btn-outline btn-accent">More info</button>
                </div>
            </div>
        </div>
        </div>
        </div> 
        </>
    )
}