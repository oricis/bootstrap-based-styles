/***********************************************************************
 * JS functions
 * v.1.0.0
 *
 * Moisés Alcocer, 2020
 * https://github.com/oricis/bootstrap-based-styles
 * https://www.ironwoods.es
 */


function $(id)
{
    return document.getElementById(id);
}

function closeModal(modal_id)
{
    $(modal_id).classList.add('d-none');
}

function showModal(modal_id)
{
    $(modal_id).classList.remove('d-none');
}

