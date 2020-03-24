/***********************************************************************
 * JS functions
 *
 * Moisés Alcocer, 2020
 * https://www.ironwoods.es
 */


function $(id)
{
    return document.getElementById(id);
}

function closeModal(modal_id)
{
    $(modal_id).classList.remove('d-block');
    $(modal_id).classList.add('d-none');
}

function showModal(modal_id)
{
    $(modal_id).classList.remove('d-none');
    $(modal_id).classList.add('d-block');
}

