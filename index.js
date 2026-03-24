let currentTab="all";
const tabActive=["bg-navy","border-navy","text-white"];
const tabInactive=["bg-transparent","text-black","border-state-200"];
const allContainer=document.getElementById("all-container");
const interviewContainer=document.getElementById("interview-container");
const rejectContainer=document.getElementById("reject-container");

function switchTab(tab){
    const tabs=["all","interview","rejected"];
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
if(tab=="all")
{
    allContainer.classList.remove("hidden");
}
else if(tab=="interview")
{
    interviewContainer.classList.remove("hidden");
}else
    rejectContainer.classList.remove("hidden");
}
switchTab(currentTab);
