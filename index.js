let currentTab="all";
const tabActive=["bg-navy","border-navy","text-white"];
const tabInactive=["bg-transparent","text-black","border-state-200"];
const allContainer=document.getElementById("all-container");
const interviewContainer=document.getElementById("interview-container");
const rejectContainer=document.getElementById("reject-container");
const emptyStatus=document.getElementById("empty-status");

function switchTab(tab){
    const tabs=["all","interview","rejected"];
    currentTab=tab;
    for (const t of tabs) {
    const tabName=document.getElementById("tab-"+t);  
    if(t===tab)
    {
        tabName.classList.add(...tabActive);
        tabName.classList.remove(...tabInactive);

    }else{
        tabName.classList.add(...tabInactive);
        tabName.classList.remove(...tabActive);
    }
}
const pages=[allContainer,interviewContainer,rejectContainer];
for (const page of pages) {
    page.classList.add("hidden");
}
emptyStatus.classList.add("hidden");
if(tab=="all")
{
    allContainer.classList.remove("hidden");
    if(allContainer.children.length<1)
    {
        emptyStatus.classList.remove("hidden");
    }
}
else if(tab=="interview")
{
    interviewContainer.classList.remove("hidden");
     if(interviewContainer.children.length<1)
    {
        emptyStatus.classList.remove("hidden");
    }
}else
{
    rejectContainer.classList.remove("hidden");
     if(rejectContainer.children.length<1)
    {
        emptyStatus.classList.remove("hidden");
    }
}
    updateStat();
}
const totalStat=document.getElementById("stat-total");
const interviewStat=document.getElementById("stat-interview");
const rejectStat=document.getElementById("stat-reject");
const available=document.getElementById("available");
totalStat.innerText=allContainer.children.length;
switchTab(currentTab);

document.getElementById("jobs-container").addEventListener("click",function(event){
    const clickedElement=event.target;
    const card=clickedElement.closest(".card");
    const status=card.querySelector(".status");
    const parent=card.parentNode;
    if(clickedElement.classList.contains("interview"))
    {   status.innerText="interviewed";
        interviewContainer.appendChild(card);
        updateStat();
    }
    if(clickedElement.classList.contains("reject"))
    {   status.innerText="rejected";
        rejectContainer.appendChild(card);
        updateStat();
    }
    if(clickedElement.classList.contains("delete"))
    {
        parent.removeChild(card);
        updateStat();
    }
})
function updateStat(){
   const counts={
    all:allContainer.children.length,
    interview:interviewContainer.children.length,
    rejected:rejectContainer.children.length,
   };
    totalStat.innerText=counts.all;
    interviewStat.innerText=counts.interview;
    rejectStat.innerText=counts.rejected;
   available.innerText=counts[currentTab];
   

}
updateStat();