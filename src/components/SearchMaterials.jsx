import { useEffect, useRef, useReducer } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";

import { useAppStore } from "@/lib/zustand";
import { getData } from "@/requests";
import { toast } from "sonner";
import { Skeleton } from "./ui/skeleton";

const initialState = {
  data: [],
  searchResults: [],
  loading: false,
  query: "",
  resultVisible: false,
};

function reducerFunction(state, { type, payload }) {
  switch (type) {
    case "data":
      return {
        ...state,
        [type]: payload,
      };
    case "loading":
      return {
        ...state,
        [type]: payload,
      };
    case "searchResults":
      return {
        ...state,
        [type]: payload,
      };
    case "query":
      return {
        ...state,
        [type]: payload,
      };
    case "resultVisible":
      return {
        ...state,
        [type]: payload,
      };
    case "clear":
      return {
        ...state,
        resultVisible: false,
        query: "",
      };
    default:
      return state;
  }
}

export default function SearchMaterials() {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const { data, searchResults, loading, query, resultVisible } = state;

  const timerRef = useRef(null);
  const workerRef = useRef(null);

  // Get data
  useEffect(() => {
    dispatch({ type: "loading", payload: true });
    getData("/materials")
      .then((res) => {
        dispatch({ type: "data", payload: res.data });
        dispatch({ type: "searchResults", payload: res.data });
      })
      .catch(({ message }) => {
        toast.error(message);
      })
      .finally(() => {
        dispatch({ type: "loading", payload: false });
      });
  }, []);

  // Worker ni yaratish
  useEffect(() => {
    workerRef.current = new Worker("/workers/search.js");

    function handleWorkerMessage(e) {
      const { result } = e.data;
      const id = setTimeout(() => {
        dispatch({ type: "loading", payload: false });
        dispatch({ type: "searchResults", payload: result });
        clearTimeout(id);
      }, 500);
    }

    workerRef.current.addEventListener("message", handleWorkerMessage);

    // Cleanup
    return () => {
      workerRef.current.removeEventListener("message", handleWorkerMessage);
      workerRef.current.terminate();
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // For clear
  useEffect(() => {
    function handleClick(e) {
      if (!e.target.classList.contains("js-search-input")) {
        dispatch({ type: "clear" });
      }
    }

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  // For scroll
  useEffect(() => {
    if (resultVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [resultVisible]);

  // Handle input change with debouncing
  function handleChange(e) {
    const value = e.target.value;
    dispatch({ type: "query", payload: value });

    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Set a new timer
    timerRef.current = setTimeout(() => {
      // Worker ga so'rov yuborish
      if (workerRef.current) {
        dispatch({ type: "loading", payload: true });
        workerRef.current.postMessage({
          query: value,
          data: state.data,
        });
      }
    }, 500);
  }

  // Clear search input
  function handleClear() {
    dispatch({ type: "clear" });
    // Worker ga bo'sh so'rov yuborish
    if (workerRef.current) {
      workerRef.current.postMessage({
        query: "",
        data: data,
      });
    }
  }

  return (
    <div className="w-full max-w-md relative">
      <div className="relative">
        {/* Input  */}
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none select-none" />
          <Input
            type="text"
            onFocus={() => {
              dispatch({ type: "resultVisible", payload: true });
            }}
            placeholder="Nimani qidiryapsiz?"
            value={query}
            onChange={handleChange}
            className="pl-8 pr-8 bg-primary-background js-search-input"
          />
          {query && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full rounded-l-none"
              onClick={handleClear}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Tozalash</span>
            </Button>
          )}
        </div>
      </div>
      {resultVisible && (
        <div className="mt-6 w-full min-w-md rounded-md border p-4 bg-white absolute">
          {loading ? (
            <div className="flex flex-col gap-3">
              <Skeleton className="w-full h-16" />
              <Skeleton className="w-full h-16" />
              <Skeleton className="w-full h-16" />
            </div>
          ) : (
            <>
              {searchResults.length > 0 ? (
                <>
                  <h2 className="mb-2 font-medium">
                    Natijalar ({searchResults.length})
                  </h2>
                  <ul className="space-y-2 max-h-[300px] h-full overflow-y-auto pr-5">
                    {searchResults.map(({ title, id, summary }) => (
                      <li
                        key={id}
                        onClick={() => {
                          router.push(`/${id}`);
                          handleClear();
                        }}
                        className="rounded-sm bg-muted p-1 flex flex-col relative border hover:bg-white transition"
                      >
                        <h3 className="font-medium mb-2 line-clamp-1 before:absolute before:inset-0 cursor-pointer select-none">
                          {title}
                        </h3>
                        <p className="line-clamp-1 text-xs">{summary}</p>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p>Hech qanday ma'lumot topilmadi</p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
