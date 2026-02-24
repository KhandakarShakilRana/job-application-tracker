
let interviewList = [];
let rejectedList = [];
let totalCard = document.getElementById("total-card");
let interviewCard = document.getElementById("interview-card");
let rejectedCard = document.getElementById("rejected-card");
let availableJobs = document.getElementById("available-jobs");
let allBtn = document.getElementById("all-btn");
let interviewBtn = document.getElementById("interview-btn");
let rejectedBtn = document.getElementById("rejected-btn");
let jobList = document.getElementById("job");
let interviewBox = document.getElementById("interview-box");
let rejectedBox = document.getElementById("rejected-box");
let deleteBtn = document.querySelectorAll(".delete-btn");
let filterBox = document.getElementById("filter-box");
let noJob = document.getElementById("no-job");
let interviewAcceptBtn = document.querySelectorAll(".interview-btn");
let rejectedAcceptBtn = document.querySelectorAll(".rejected-btn");
let notAppliedBtn = document.querySelectorAll(".not-applied");
let activeTab = "all";

function stats() {
  totalCard.innerText = jobList.children.length;
  interviewCard.innerText = interviewList.length;
  rejectedCard.innerText = rejectedList.length;
  availableJobs.innerText = `${jobList.children.length} jobs`;
  if (activeTab === "all") {
    availableJobs.innerText = `${jobList.children.length} jobs`;
  } else if (activeTab === "interview") {
    availableJobs.innerText = `${interviewList.length} out of ${jobList.children.length} jobs`;
  } else if (activeTab === "rejected") {
    availableJobs.innerText = `${rejectedList.length} out of ${jobList.children.length} jobs`;
  }
}
stats();

function toggleBtn(id) {
  allBtn.classList.remove("bg-blue-600", "text-white");
  allBtn.classList.add("text-slate-600");
  interviewBtn.classList.remove("bg-blue-600", "text-white");
  rejectedBtn.classList.remove("bg-blue-600", "text-white");

  const selected = document.getElementById(id);
  selected.classList.add("bg-blue-600", "text-white");
  selected.classList.remove("text-slate-600");

  if (id === "interview-btn") {
    activeTab = "interview";
    filterBox.classList.remove("hidden");
    jobList.classList.add("hidden");
    checkNoJobSection();
    renderInterviewList();
  } else if (id === "all-btn") {
    activeTab = "all";
    filterBox.classList.add("hidden");
    jobList.classList.remove("hidden");
      checkNoJobSection();
  } else if (id === "rejected-btn") {
    activeTab = "rejected";
    filterBox.classList.remove("hidden");
    jobList.classList.add("hidden");
    checkNoJobSection();
    renderRejectedList();
  }
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    const target = event.target.closest(".myjobs");
    const jobTitle = target.querySelector(".job-title").innerText;
    const subTitle = target.querySelector(".sub-title").innerText;
    const moreInfo = target.querySelector(".more-info").innerText;

    const status = (target.querySelector(".status").innerText = "Interview");
    const description = target.querySelector(".description").innerText;
    const statusElement = target.querySelector(".status");
    statusElement.classList.remove(
      "bg-slate-100",
      "text-slate-600",
      "bg-rose-100",
      "text-rose-600",
    );

    statusElement.classList.add("bg-emerald-100", "text-emerald-600");

    const jobInformation = {
      jobTitle,
      subTitle,
      moreInfo,
      status,
      description,
    };

    const jobExists = interviewList.find(
      (item) => item.jobTitle == jobInformation.jobTitle,
    );
    if (!jobExists) {
      interviewList.push(jobInformation);
    }
    rejectedList = rejectedList.filter(
      (item) => item.jobTitle !== jobInformation.jobTitle,
    );
    stats();
    stats();

    
    if (activeTab === "interview") {
      renderInterviewList();
    }

    if (activeTab === "rejected") {
      renderRejectedList();
    }
  } else if (event.target.classList.contains("rejected-btn")) {
    const target = event.target.closest(".myjobs");
    const jobTitle = target.querySelector(".job-title").innerText;
    const subTitle = target.querySelector(".sub-title").innerText;
    const moreInfo = target.querySelector(".more-info").innerText;

    const status = (target.querySelector(".status").innerText = "Rejected");
    const description = target.querySelector(".description").innerText;
    const statusElement = target.querySelector(".status");

    statusElement.classList.remove(
      "bg-slate-100",
      "text-slate-600",
      "bg-emerald-100",
      "text-emerald-600",
    );

    statusElement.classList.add("bg-rose-100", "text-rose-600");

    const jobInformation = {
      jobTitle,
      subTitle,
      moreInfo,
      status,
      description,
    };

    const jobExists = rejectedList.find(
      (item) => item.jobTitle == jobInformation.jobTitle,
    );
    if (!jobExists) {
      rejectedList.push(jobInformation);
    }
    interviewList = interviewList.filter(
      (item) => item.jobTitle !== jobInformation.jobTitle,
    );
    stats();

    if (activeTab === "interview") {
      renderInterviewList();
    }

    if (activeTab === "rejected") {
      renderRejectedList();
    }
  }
  if(event.target.tagName === "IMG"){
    const target = event.target.closest(".myjobs");
    const jobTitle = target.querySelector(".job-title").innerText;
    target.remove();
    interviewList = interviewList.filter(item => item.jobTitle !== jobTitle);
    rejectedList = rejectedList.filter(item => item.jobTitle !== jobTitle);


if (activeTab === "interview") renderInterviewList();
if (activeTab === "rejected") renderRejectedList();

checkNoJobSection();

  }
  stats();
});

function renderInterviewList() {
  filterBox.innerHTML = "";

  for (let filter of interviewList) {
    console.log(filter);
    let div = document.createElement("div");
    div.classList.add(
      "myjobs",
      "glass-card",
      "p-8",
      "rounded-2xl",
      "custom-shadow",
      "relative",
      "group",
    );
    div.innerHTML = `<div
             
            class=" delete-btn absolute top-8 right-8 cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
          >
            <img src="assets/Trash.png" alt="" />
          </div>
          <div class="mb-2">
            <h3 class="text-xl font-bold text-[#1e293b] job-title">
              ${filter.jobTitle}
            </h3>
            <p class="sub-title text-slate-600 font-medium">${filter.subTitle}</p>
          </div>
          <div
            class="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500 mb-6 font-medium more-info"
          >
            <p> ${filter.moreInfo}</p>
          </div>
          <div class="mb-5">
            <span
              
              class="px-3 py-1 bg-emerald-100 not-applied text-emerald-600 text-[10px] font-bold rounded-lg uppercase tracking-[0.1em] border border-slate-200 status"
              >${filter.status}</span
            >
          </div>
          <p class="text-slate-600 text-[15px] mb-8 leading-relaxed max-w-4xl description">
            ${filter.description}
          </p>
          <div class="flex flex-wrap gap-3">
            <button
              
              class="interview-btn px-6 py-2.5 border-2 border-emerald-100 text-emerald-600 text-xs font-bold rounded-xl hover:bg-emerald-50 hover:border-emerald-200 transition-all uppercase tracking-wider"
            >
              Interview
            </button>
            <button
              
              class="rejected-btn px-6 py-2.5 border-2 border-rose-100 text-rose-600 text-xs font-bold rounded-xl hover:bg-rose-50 hover:border-rose-200 transition-all uppercase tracking-wider"
            >
              Rejected
            </button>
          </div>`;
    filterBox.appendChild(div);
  }
}

function renderRejectedList() {
  filterBox.innerHTML = "";

  for (let reject of rejectedList) {
    console.log(reject);
    let div = document.createElement("div");
    div.classList.add(
      "myjobs",
      "glass-card",
      "p-8",
      "rounded-2xl",
      "custom-shadow",
      "relative",
      "group",
    );
    div.innerHTML = `<div
             
            class=" delete-btn absolute top-8 right-8 cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
          >
            <img src="assets/Trash.png" alt="" />
          </div>
          <div class="mb-2">
            <h3 class="text-xl font-bold text-[#1e293b] job-title">
              ${reject.jobTitle}
            </h3>
            <p class="sub-title text-slate-600 font-medium">${reject.subTitle}</p>
          </div>
          <div
            class="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500 mb-6 font-medium more-info"
          >
            <p> ${reject.moreInfo}</p>
          </div>
          <div class="mb-5">
            <span
              
              class="px-3 py-1 bg-rose-100 not-applied text-rose-600 text-[10px] font-bold rounded-lg uppercase tracking-[0.1em] border border-slate-200 status"
              >${reject.status}</span
            >
          </div>
          <p class="text-slate-600 text-[15px] mb-8 leading-relaxed max-w-4xl description">
            ${reject.description}
          </p>
          <div class="flex flex-wrap gap-3">
            <button
              
              class="interview-btn px-6 py-2.5 border-2 border-emerald-100 text-emerald-600 text-xs font-bold rounded-xl hover:bg-emerald-50 hover:border-emerald-200 transition-all uppercase tracking-wider"
            >
              Interview
            </button>
            <button
              
              class="rejected-btn px-6 py-2.5 border-2 border-rose-100 text-rose-600 text-xs font-bold rounded-xl hover:bg-rose-50 hover:border-rose-200 transition-all uppercase tracking-wider"
            >
              Rejected
            </button>
          </div>`;
    filterBox.appendChild(div);
  }
}


function checkNoJobSection() {
  if (activeTab === "all") {
    if (jobList.children.length === 0) {
      noJob.classList.remove("hidden");
    } else {
      noJob.classList.add("hidden");
    }
  } else if (activeTab === "interview") {
    if (interviewList.length === 0) {
      noJob.classList.remove("hidden");
    } else {
      noJob.classList.add("hidden");
    }
  } else if (activeTab === "rejected") {
    if (rejectedList.length === 0) {
      noJob.classList.remove("hidden");
    } else {
      noJob.classList.add("hidden");
    }
  }
}
