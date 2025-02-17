import { AxiosInstance } from "@/Axios/AxiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    resume : {},
    loading : false,
    error : null
}


const SelectResumeTemplate = createAsyncThunk("resume/templates",async (templateNumber,{rejectWithValue})=>{
    try {
        if(templateNumber){
         const Response = await AxiosInstance.post(`/resume/select-template`,{templateNumber})

         if(Response){
            return Response.data.data
         }
        }
    } catch (error) {
        return  rejectWithValue(error.response.message)
    }

}) 

const SavePersonalDetails = createAsyncThunk("resume/personal-details",async (data,{rejectWithValue})=>{
    try {
        if(data){
         const Response = await AxiosInstance.post(`/resume/personal-info/${data.resumeId}`,data.data)

         if(Response){
            return Response.data.data
         }
        }
    } catch (error) {
        return  rejectWithValue(error.response.message)
    }

}) 
const SaveEducationInfo = createAsyncThunk("resume/edu-details",async (data,{rejectWithValue})=>{
    try {
        if(data){
         const Response = await AxiosInstance.post(`/resume/edu-details/${data.resumeId}`,data.data)

         if(Response){
            return Response.data.data
         }
        }
    } catch (error) {
        return  rejectWithValue(error.response.message)
    }

}) 
const SaveExperienceDetails = createAsyncThunk("resume/expr-details",async (data,{rejectWithValue})=>{
    try {
        if(data){
         const Response = await AxiosInstance.post(`/resume/expr/${data.resumeId}`,data.data)

         if(Response){
            return Response.data.data
         }
        }
    } catch (error) {
        return  rejectWithValue(error.response.message)
    }

}) 
const SaveSkillsDetails = createAsyncThunk("resume/skills",async (data,{rejectWithValue})=>{
    try {
        if(data){
         const Response = await AxiosInstance.post(`/resume/skills/${data.resumeId}`,{Skills: data.data})

         if(Response){
            return Response.data.data
         }
        }
    } catch (error) {
        return  rejectWithValue(error.response.message)
    }

}) 
const SaveProjectDetails = createAsyncThunk("resume/projects",async (data,{rejectWithValue})=>{
    try {
        if(data){
         const Response = await AxiosInstance.post(`/resume/projects/${data.resumeId}`,{Projects: data.data})

         if(Response){
            return Response.data.data
         }
        }
    } catch (error) {
        return  rejectWithValue(error.response.message)
    }

}) 
const SaveAboutDetails = createAsyncThunk("resume/summary",async (data,{rejectWithValue})=>{
    try {
        if(data){
         const Response = await AxiosInstance.post(`/resume/background/${data.resumeId}`,{background : data.data})

         if(Response){
            return Response.data.data
         }
        }
    } catch (error) {
        return  rejectWithValue(error.response.message)
    }

}) 
const ChangeResumeTemplate = createAsyncThunk("resume/change-temp",async (data,{rejectWithValue})=>{
    try {
        if(data){
         const Response = await AxiosInstance.post(`/resume/change-temp/${data.resumeId}`,{templateNumber : data.templateNumber})

         if(Response){
            return Response.data.data
         }
        }
    } catch (error) {
        return  rejectWithValue(error.response.message)
    }

}) 


const GetResumeById = createAsyncThunk("resume/get",async (resumeId,{rejectWithValue})=>{
    try {
        if(resumeId){
         const Response = await AxiosInstance.get(`/resume/get-resume/${resumeId}`)

         if(Response){
            return Response.data.data
         }
        }
    } catch (error) {
        return  rejectWithValue(error.response.message)
    }

}) 

const ResumeSlice = createSlice({
    name: "Resume",
    initialState,
    extraReducers: (reducer)=>{
        reducer.addCase(GetResumeById.pending,(state)=>{
            state.loading = true
        })
        reducer.addCase(GetResumeById.fulfilled,(state,action)=>{
            state.loading = false,
            state.resume = action.payload
            state.error = null
        })
        reducer.addCase(GetResumeById.rejected,(state,action)=>{
            state.loading = true,
            state.error = action.payload
            state.error = null
        })
        reducer.addCase(SavePersonalDetails.pending,(state)=>{
            state.loading = true
            state.error = null
        })
        reducer.addCase(SavePersonalDetails.fulfilled,(state,action)=>{
            state.loading = false,
            state.resume = action.payload,
            state.error = null
        })
        reducer.addCase(SavePersonalDetails.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.payload
        })
        reducer.addCase(SelectResumeTemplate.pending,(state)=>{
            state.loading = true
            state.error = null
        })
        reducer.addCase(SelectResumeTemplate.fulfilled,(state,action)=>{
            state.loading = false,
            state.resume = action.payload,
            state.error = null
        })
        reducer.addCase(SelectResumeTemplate.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.payload
        })
        reducer.addCase(SaveEducationInfo.pending,(state)=>{
            state.loading = true
            state.error = null
        })
        reducer.addCase(SaveEducationInfo.fulfilled,(state,action)=>{
            state.loading = false,
            state.resume = action.payload,
            state.error = null
        })
        reducer.addCase(SaveEducationInfo.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.payload
        })
        reducer.addCase(SaveExperienceDetails.pending,(state)=>{
            state.loading = true
            state.error = null
        })
        reducer.addCase(SaveExperienceDetails.fulfilled,(state,action)=>{
            state.loading = false,
            state.resume = action.payload,
            state.error = null
        })
        reducer.addCase(SaveExperienceDetails.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.payload
        })
        reducer.addCase(SaveSkillsDetails.pending,(state)=>{
            state.loading = true
            state.error = null
        })
        reducer.addCase(SaveSkillsDetails.fulfilled,(state,action)=>{
            state.loading = false,
            state.resume = action.payload,
            state.error = null
        })
        reducer.addCase(SaveSkillsDetails.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.payload
        })
        reducer.addCase(SaveProjectDetails.pending,(state)=>{
            state.loading = true
            state.error = null
        })
        reducer.addCase(SaveProjectDetails.fulfilled,(state,action)=>{
            state.loading = false,
            state.resume = action.payload,
            state.error = null
        })
        reducer.addCase(SaveProjectDetails.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.payload
        })
        reducer.addCase(SaveAboutDetails.pending,(state)=>{
            state.loading = true
            state.error = null
        })
        reducer.addCase(SaveAboutDetails.fulfilled,(state,action)=>{
            state.loading = false,
            state.resume = action.payload,
            state.error = null
        })
        reducer.addCase(SaveAboutDetails.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.payload
        })
        reducer.addCase(ChangeResumeTemplate.pending,(state)=>{
            state.loading = true
            state.error = null
        })
        reducer.addCase(ChangeResumeTemplate.fulfilled,(state,action)=>{
            state.loading = false,
            state.resume = action.payload,
            state.error = null
        })
        reducer.addCase(ChangeResumeTemplate.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.payload
        })
    }
})

export {
    SelectResumeTemplate,
    GetResumeById,
    SavePersonalDetails,
    SaveEducationInfo,
    ChangeResumeTemplate,
    SaveExperienceDetails,
    SaveSkillsDetails,
    SaveProjectDetails,
    SaveAboutDetails
}

export default ResumeSlice.reducer