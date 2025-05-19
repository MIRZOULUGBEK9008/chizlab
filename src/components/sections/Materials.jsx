"use client";
import { getData } from "@/requests";
import MaterialCard from "../MaterialCard";
import { useEffect, useReducer, useState } from "react";
import { toast } from "sonner";
import MaterialsSkleton from "../loaders/MaterialsSkleton";
import { Button } from "../ui/button";
import { DashIcon } from "@radix-ui/react-icons";

const initialState = {
  data: {
    materials: [],
  },
  loading: false,
  skip: 0,
  limit: 8,
  more: true,
};

function reducerFuntion(state, { type, payload }) {
  switch (type) {
    case "data":
      return {
        ...state,
        [type]: {
          materials: [...state.data.materials, ...payload.data],
        },
        loading: false,
        more: payload.total >= state.skip + state.limit,
      };
    case "loading":
      return { ...state, [type]: payload };
    case "skip":
      return { ...state, [type]: state[type] + payload };

    default:
      return state;
  }
}

export default function Materials() {
  const [
    {
      data: { materials },
      loading,
      skip,
      limit,
      more,
    },
    dispatch,
  ] = useReducer(reducerFuntion, initialState);
  console.log(skip);

  useEffect(() => {
    dispatch({ type: "loading", payload: true });
    getData("/materials", { limit, skip })
      .then((res) => {
        dispatch({ type: "data", payload: res });
      })
      .catch(({ message }) => {
        toast.error(message);
      })
      .finally(() => {
        dispatch({ type: "loading", payload: false });
      });
  }, [skip]);

  function handleClick() {
    dispatch({ type: "skip", payload: limit });
  }

  return (
    <section className="py-10">
      <div className="base-container">
        <h2 className="mb-10 font-semibold text-center text-4xl">
          Materiallar
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {materials.map((info, index) => {
            return (
              <li key={index}>
                <MaterialCard info={info} />
              </li>
            );
          })}
        </ul>

        {loading && <MaterialsSkleton length={limit} />}

        {materials.length !== 0 && more && (
          <div onClick={handleClick} className="flex justify-center mt-10">
            <Button disabled={loading} className="w-52">
              Ko'proq
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
