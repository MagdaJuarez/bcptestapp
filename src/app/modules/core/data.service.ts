import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

interface Agency{
  agencia:string;
  distrito:string;
  provincia:string;
  departamento:string;
  direccion:string;
  lat:number;
  lon:number;
  nombreImagen:string;
}


@Injectable({
  providedIn: "root"
})
export class DataService {
  protected readonly AGENCIES_COLLECTION = "agencias";
  public isLoading$ = new BehaviorSubject<boolean>(true);

  get timestamp() {
    return new Date().getTime();
  }

  constructor(private afDb: AngularFirestore) {}

  getAgenciesCollection(){
    return this.afDb.collection(
      this.AGENCIES_COLLECTION, ref => ref.orderBy("agencia"));
  }

  getAgencies(): Observable<any> {
    return this.getAgenciesCollection()
      .snapshotChanges()
      .pipe(
        map(snapshot =>
          snapshot.map(a => {
            //Get document data
            const data = a.payload.doc.data() as Agency;
            //Get document id
            const id = a.payload.doc.id;
            //Use spread operator to add the id to the document data
            return { id, ...data };
          })
        ),
        tap(agencies => {
          this.isLoading$.next(false);
        }),
        catchError(e => throwError(e))
      );
  }  

  editAgency(id, data): Promise<void> {
    return this.getAgenciesCollection()
      .doc(id)
      .update({
        ...data,
        updated_at: this.timestamp
      });
  }

  getAgency(id): Observable<any> {
    return this.getAgenciesCollection()
      .doc(id)
      .snapshotChanges()
      .pipe(
        map(snapshot => {
          const data = snapshot.payload.data() as Agency;
          const id = snapshot.payload.id;
          return { id, ...data };
        }),
        catchError(e => throwError(e))
      );
  }

}
