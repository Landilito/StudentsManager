import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Student } from 'src/app/data/student.model';
// import { Observable } from 'rxjs';
// import { Student } from 'src/app/data/students.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  studentList!: any[]

  constructor(private afs: AngularFirestore) { }

  addStudent(student: Student){
    let studentId = student.id.toString()
    studentId = this.afs.createId();
    return this.afs.collection('/Students/students-collection').add(student);
  }

  getStudents(){
    this.afs.collection('/Students/students-collection').snapshotChanges().forEach(
      student => this.studentList.push(student)
    );
    return this.studentList;
  }

  deleteStudents(student: Student){
    this.afs.doc('/Students/students-collection/'+student.id).delete();
  }

  updateStudent(student: Student){
    this.addStudent(student)
  }
}
