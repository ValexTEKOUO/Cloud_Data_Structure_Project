<script>
    import { enhance } from '$app/forms';
    export let film;
    export let data;

    let showDetails = false
    function Details() {
        if(showDetails) showDetails = false
        else showDetails = true
    }

    let edit = false;
    function Edit() {
        if(edit) edit = false
        else edit = true
    }
</script>

<div class="details">
    <button on:click={Details}>
        Details
    </button>
    {#if showDetails}
        <p><b>Film name</b>: {film.filmName}</p>
        <p><b>Film type</b>: {film.filmType}</p>
        <p><b>Producer name:</b> {film.filmProducerName}</p>
        <p><b>End date of filming:</b> {film.endDate}</p>
        <p><b>District:</b> {film.district}</p>
        <p><b>Geolocation:</b> <br> <b>Coordinates:</b> {film.geolocation.coordinates} <br> <b>Type:</b> {film.geolocation.type}</p>
        <p><b>sourceLocationId:</b> {film.sourceLocationId}</p>
        <p><b>Director name:</b> {film.filmDirectorName}</p>
        <p><b>Adress:</b> {film.address}</p>
        <p><b>Start date of filming:</b> {film.startDate}</p>
        <p><b>Year:</b> {film.year}</p>
    {/if}

    {#if data.user.role === 'admin'}
        <button on:click={Edit}>
            Edit
        </button>
        {#if edit}
            <form use:enhance method="POST" action="?/editLocation&id={film._id}" class="card comment-form">
                <textarea  name="filmName" placeholder="filmName" rows="1" >{film.filmName}</textarea>
                <textarea  name="filmType" placeholder="filmType" rows="1" >{film.filmType}</textarea>
                <textarea  name="filmProducerName" placeholder="filmProducerName" rows="1" >{film.filmProducerName}</textarea>
                <textarea  name="endDate" placeholder="endDate" rows="1" >{film.endDate}</textarea>
                <textarea  name="district" placeholder="district" rows="1" >{film.district}</textarea>
                <textarea  name="lattitute" placeholder="lattitude" rows="1" >{film.geolocation.coordinates[0]}</textarea>
                <textarea  name="longitude" placeholder="longitude" rows="1" >{film.geolocation.coordinates[1]}</textarea>
                <textarea  name="sourceLocationId" placeholder="sourceLocationId" rows="1" >{film.sourceLocationId}</textarea>
                <textarea  name="filmDirectorName" placeholder="filmDirectorName" rows="1" >{film.filmDirectorName}</textarea>
                <textarea  name="address" placeholder="address" rows="1" >{film.address}</textarea>
                <textarea  name="startDate" placeholder="startDate" rows="1" >{film.startDate}</textarea>
                <textarea  name="year" placeholder="year" rows="1" >{film.year}</textarea>
                <button>
                    Confirm
                </button>      
            </form>
        {/if}

    {/if}

</div>

<style>

textarea {
    resize: none;
  }
  </style>

