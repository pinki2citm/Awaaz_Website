function vote()
{
    var vote_count=document.getElementById('votecount');
    var curr=Number(vote_count.innerHTML);
    curr++;
    document.getElementById('votecount').innerHTML=curr;
    document.getElementById('btn').style.display='none';
}