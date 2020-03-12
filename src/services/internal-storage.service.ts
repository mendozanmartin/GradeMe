import { Injectable } from "@angular/core";
import { Couchbase } from "nativescript-couchbase-plugin";
import { Course } from "~/models/course.model";
const coursesDatabase = new Couchbase("courses");
const termsDatabase = new Couchbase("terms");

@Injectable({
    providedIn: "root"
})
export class InternalStorageService {
    constructor() {}

    syncCourses(doc: any) {
        if (coursesDatabase.getDocument(doc.cid)) {
            coursesDatabase.updateDocument(doc.cid, {
                doc
            });
        } else {
            coursesDatabase.createDocument(
                {
                    doc
                },
                doc.cid
            );
        }
    }

    getCourses() {
        const refinedResults = [];
        const results = coursesDatabase.query({
            select: [] // Leave empty to query for all
        });
        results.forEach(v => {
            delete v.id;
            refinedResults.push(v.doc);
        });
        return refinedResults;
    }

    addCourse(course: Course, cid: string) {
        coursesDatabase.createDocument(course, cid);
    }
}
