import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service{

    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await Databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                })
        }catch(error){
            throw error
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }){
        try{
            return await Databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }

            )
        }catch(error){
            throw error
        }
    }

    async deletePost(slug, { title, content, featuredImage, status }) {
        try {
            return await Databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            throw error
            return false
        }
    }

    async getPost(slug){
        try{
            return await Databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }catch(error){
            throw error
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try{
            return await Databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        }catch(error){
            console.log("error")
            return false
        }
    }

    // file upload method
    async uploadFile(file){
        try{
            return await Storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
            return true
        }catch(error){
            console.log("error");
            return false;
        }
    }

    // delete file
    async deleteFile(fileId){
        try{
            await Storage.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
            return true
        }catch(error){
            console.log("error")
            return false;
        }
    }

    getFilePreview(fileId){
        return Storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service()

export default service